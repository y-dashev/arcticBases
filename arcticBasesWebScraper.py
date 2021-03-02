from bs4 import BeautifulSoup
import urllib
from urllib.request import urlopen
from collections import defaultdict
import pandas as pd
from lxml import html
import requests
import re as regular_expression
import json
url = "https://en.wikipedia.org/wiki/Research_stations_in_Antarctica"
website_url = requests.get(url).text
#df = pd.read_html(url, attrs={"class": "wikitable"})[0] # 0 is for the 1st table in this particular page
#df.head()
#print(df)
soup = BeautifulSoup(urlopen(url)) 
table = soup.find('table', class_="wikitable")
coords = []
coords_element = table.tbody.find_all('span', class_="geo")
header = table.find_all('th', class_="headerShort")

bases = []
names = []
l = []
#coords_element = table.find_all('td')
for row in coords_element:
    coords.append(row.text)
    
    
for row in table.find_all('tr')[1:]:
    bases.append(row.find_all('td')[0].text)
   

for row in table.tbody.find_all('tr')[1:]:
    l.append(row.find_all('td')[0].find('a').get('href'))
  




#print(coords)
#print(bases)
obj = [{'name' : bases , 'coordinates': coords, 'link' : l} for bases,coords,l in zip(bases, coords, l)]
json.dumps(obj)

with open('data2.json', 'w') as outfile:
    json.dump(obj, outfile)