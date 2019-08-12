import requests
from bs4 import BeautifulSoup

page = requests.get(
    'https://infogob.jne.gob.pe/Localidad/Peru_procesos-electorales_uHzVUEHmgS0%3dzE')

soup = BeautifulSoup(page.text, 'html.parser')

mapa = soup.find(id="Mapa")
print(mapa)
