import grequests
import re
from bs4 import BeautifulSoup

REGIONES = [
    "Amazonas",
    "Ancash",
    "Apurimac",
    "Arequipa",
    "Ayacucho",
    "Cajamarca",
    "Cusco",
    "Huancavelica",
    "Huanuco",
    "Ica",
    "Junin",
    "La Libertad",
    "Lambayeque",
    "Lima",
    "Loreto",
    "Madre de Dios",
    "Moquegua",
    "Pasco",
    "Piura",
    "Puno",
    "San Martin",
    "Tacna",
    "Tumbes",
    "Ucayali",
]


BASE_URL = 'https://infogob.jne.gob.pe/Localidad/Peru'


regiones_urls = list(map(lambda region_name: BASE_URL +
                         "/" + region_name + "_procesos-electorales", REGIONES))

rs = (grequests.post(u) for u in regiones_urls)

responses = grequests.map(rs)


for response in responses:
    region_soup = BeautifulSoup(response.text, 'html.parser')
    autoridad = region_soup.find(
        id="gridAutoridadesRegionales").find_all("tr")[1].find_all("td")[1].text.lower()
    print(autoridad)
