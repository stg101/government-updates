from bs4 import BeautifulSoup
import csv
import re
from django.apps import AppConfig
import asyncio
import requests


regions = {
    "1": {"name": "Amazonas"},
    "2": {"name": "Ancash"},
    "3": {"name": "Apurimac"},
    "4": {"name": "Arequipa"},
    "5": {"name": "Ayacucho"},
    "6": {"name": "Cajamarca"},
    "7": {"name": "Cusco"},
    "8": {"name": "Huancavelica"},
    "9": {"name": "Huanuco"},
    "10": {"name": "Ica"},
    "11": {"name": "Junin"},
    "12": {"name": "La Libertad"},
    "13": {"name": "Lambayeque"},
    "14": {"name": "Lima"},
    "15": {"name": "Loreto"},
    "16": {"name": "Madre de Dios"},
    "17": {"name": "Moquegua"},
    "18": {"name": "Pasco"},
    "19": {"name": "Piura"},
    "20": {"name": "Puno"},
    "21": {"name": "San Martin"},
    "22": {"name": "Tacna"},
    "23": {"name": "Tumbes"},
    "24": {"name": "Ucayali"},
    "25": {"name": "Callao"},
}


BASE_URL = 'https://infogob.jne.gob.pe/Localidad/Peru'


async def async_requests():
    print("Scrapping authorities...")
    loop = asyncio.get_event_loop()
    region_url_list = list(map(lambda region: BASE_URL +
                               "/" + region["name"].lower().replace(" ", "-") + "_procesos-electorales", regions.values()))

    futures = [
        loop.run_in_executor(
            None,
            requests.post,
            region_url
        )
        for region_url in region_url_list
    ]

    index = 1

    for response in await asyncio.gather(*futures):
        region_soup = BeautifulSoup(response.text, 'html.parser')
        authority = region_soup.find(
            id="gridAutoridadesRegionales").find_all("tr")[1].find_all("td")[1].text.lower()
        regions[str(index)]["id"] = index
        regions[str(index)]["authority"] = authority.title()
        index += 1


class LocationsConfig(AppConfig):
    name = 'locations'

    def ready(self):
        loop = asyncio.get_event_loop()
        loop.run_until_complete(async_requests())

        with open('scrapped_data.csv', mode='w') as csv_file:
            fieldnames = ['name', 'id', 'authority']
            writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

            writer.writeheader()

            for region in regions.values():
                writer.writerow(region)
