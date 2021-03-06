# Antarctic Bases
Project created for university assignment for the Bulgarian Antarctic Institute of Sofia University.
Used electronjs for building the app with mapboxjs for visualisating the map itself, also I made a webscraper for wikipedia table elements to colect data and save it into JSON file with all the needed formatting which then it  populate the map.

# You can download the prebuild version here: 
https://github.com/y-dashev/antarctic-bases

# Features :
- ELectron Js for building it as a desktop app.
- Webscraper made with Python (using beatifoulSoup4) to exctract data from wikipedia tables and save it to JSON file with all the needed formatting /Check the webScraper folder
- MapboxJs satellite map used to display the map itself.All the 'anchor' icons represent a base  because the antarctic bases are with status of a ships.
- When clicking on the icon for the base it will display a pop-up with name of the station and link to wikipedia page for it.


# How to run the app:
- clone/download the repository then run the following commands in the root folder
- run 'npm install' command to install all dependencies
- run 'npm start' to launch the app and test it
- run 'npm make' to build the app for distribution/packaging

# Wikiepedia Link Of the Table That Was Extracted:
https://en.wikipedia.org/wiki/Research_stations_in_Antarctica


# Important Notice:
Do not use this map for navigation because data extracted from wikipedia could be incorrect/incomplete

# If you like this project you can always give it a star or contribute to it !
