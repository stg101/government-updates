from bs4 import BeautifulSoup
from django.apps import AppConfig
import asyncio
import requests
import re
from datetime import datetime


BASE_URL = 'https://infogob.jne.gob.pe/Localidad'
SCOPES_ARR = ["Co", "Re", "Pr", "Di"]
SCRAPPER_CONTEXT_ARR = ["gridAutoridadesRegionales",
                        "gridAutoridadesProvinciales", "gridAutoridadesDistritales"]
MAX_ITER = 2


async def async_requests(base_url, location, step, model, parent):

    scope = SCOPES_ARR[step + 1]
    scrapper_context = SCRAPPER_CONTEXT_ARR[step]
    loop = asyncio.get_event_loop()

    base_url = base_url + location.lower().replace("-", "~").replace(" ", "-")
    print("Scrapping sublocations from", location)

    location_url = base_url + "_procesos-electorales"

    print("url ", location_url)

    response = requests.post(location_url)

    if response.status_code != 404:

        location_soup = BeautifulSoup(response.text, 'html.parser')

        sublocations = location_soup.find(id='Mapa').find_all(
            id=re.compile(r'.' + location.upper().replace(" ", "") + '.'))
        sublocations = [sublocation["title"].lower()
                        for sublocation in sublocations]

        region_url_list = [base_url + "/" + sublocation.lower().replace(
            " ", "-") + "_procesos-electorales" for sublocation in sublocations]
        print("sublocations ", sublocations)
        futures = [
            loop.run_in_executor(
                None,
                requests.post,
                url
            )
            for url in region_url_list
        ]

        index = 0
        for response in await asyncio.gather(*futures):
            if index < MAX_ITER:
                sublocation_soup = BeautifulSoup(response.text, 'html.parser')
                sublocation_url_base = base_url + "/"
                try:
                    authority = sublocation_soup.find(
                        id=scrapper_context).find_all("tr")[1].find_all("td")[1].text.lower()
                    model.objects.create(authority=authority,
                                         name=sublocations[index], scope=scope, url_base=sublocation_url_base, parent=parent)
                except:
                    print("An exception occurred")
            index += 1


class LocationsConfig(AppConfig):
    name = 'locations'

    def ready(self):
        from .models import Location
        now = datetime.now()
        should_update = False
        minutes_ago = 0
        if Location.objects.first() is None:
            should_update = True
        else:
            last_location_update = Location.objects.first().created_on.replace(tzinfo=None)
            minutes_ago = (now - last_location_update).total_seconds() / 60.0

        if should_update or minutes_ago > 1:
            Location.objects.all().delete()
            Location.objects.create(authority="martin vizcarra cornejo",
                                    name="peru", scope="Co")

            for index in range(3):
                locations = Location.objects.filter(scope=SCOPES_ARR[index])

                for location in locations:
                    loop = asyncio.get_event_loop()
                    loop.run_until_complete(async_requests(
                        location.url_base, location.name, index, Location, location))
