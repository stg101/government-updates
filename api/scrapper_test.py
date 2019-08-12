import requests
import re
from bs4 import BeautifulSoup

page = requests.get(
    'https://infogob.jne.gob.pe/Localidad/Peru_procesos-electorales_uHzVUEHmgS0%3dzE')

soup = BeautifulSoup(page.text, 'html.parser')

regiones = soup.find_all(id=re.compile("RPERU."))

for region in regiones:
    print(region)
