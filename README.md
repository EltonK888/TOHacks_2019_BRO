# TOHacks 2019 BRO 

This is a hack that was done for TOHacks 2019 called BRO (Batteries Recycling Organization) which aims to connect people to battery disposal locations. It uses the google maps API and shows markers of disposal locations around the current location. People who wish to dispose of batteries can then use the map to determine a route to a battery disposal location of their choice.

Companies can register their disposal location and have the marker appear on the google map.

## Tech Stack
**Back-end** - Python, Flask, SQLite3
**Front-end** - HTML5, CSS3, Bootstrap, Vanilla JavaScript
and GoogleMaps API

## Dependencies
* Flask, Flask-SQLAlchemy, flask_googlemaps, geocoder

**installing dependencies**
```bash
$  pip3 install Flask Flask-SQLAlchemy SQLAlchemy flask-googlemaps geocoder
```

## To run a local development server
In the root project directory run:
```bash
$  python app.py
```
and open up `http://localhost:8080` on your browser 

**Make sure you use your own Google Maps API key in the places where `YOUR_GOOGLE_MAPS_API_KEY` is found**


## Screenshots
Home Page
![home page](https://github.com/EltonK888/TOHacks_2019_BRO/tree/master/static/image/index.PNG) 

Location Markers
![location markers](https://github.com/EltonK888/TOHacks_2019_BRO/tree/master/static/image/markers.PNG) 

Route Finding
![Route to disposal](https://github.com/EltonK888/TOHacks_2019_BRO/tree/master/static/image/route.PNG)