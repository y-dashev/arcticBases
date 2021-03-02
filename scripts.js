


	let places = {
		'type': 'geojson',
		'data': {
		'type': 'FeatureCollection',
		'features': [
		{
		'type': 'Feature',
		'properties': {
		'description':
		'<strong>McMurdo Station</strong><p>Координати :77.8419° S, 166.6863° E</p><p>The <a href="https://en.wikipedia.org/wiki/McMurdo_Station" target="_blank" title="Opens in a new window">McMurdo Station </a> is a United States Antarctic research station on the south tip of Ross Island, which is in the New Zealand–claimed Ross Dependency on the shore of McMurdo Sound in Antarctica. It is operated by the United States through the United States Antarctic Program, a branch of the National Science Foundation</p>',
		'icon': 'harbor'
		},
		'geometry': {
		'type': 'Point',
		'coordinates': [166.6667, -77.8500]
		}
		},
		{
		'type': 'Feature',
		'properties': {
		'description':
		'<strong>Livingston island</strong><p>Координати:55.9016°N 3.5435°W</p><p><a href="https://en.wikipedia.org/wiki/Livingston_Island" target="_blank" title="Opens in a new window">Livingston Island</a> Livingston Island (Russian name Smolensk,62°36′S 60°30′W) is an Antarctic island in the Southern Ocean, part of the South Shetlands Archipelago. It was the first land discovered south of 60° south latitude in 1819.</p>',
		'icon': 'harbor'
		},
		'geometry': {
		'type': 'Point',
		'coordinates': [ -60.499998, -62.5999976]
		}
		},
		{
			'type': 'Feature',
			'properties': {
			'description':
			'<strong>Ice Gate Glacier</strong><p>Координати:64°54′S 62°45′W</p><p> <a href=https://en.wikipedia.org/wiki/Ice_Gate_Glacier" target="_blank" title="Opens in a new window">Ice Gate Glacier </a> (64°54′S 62°45′WCoordinates: 64°54′S 62°45′W) is a narrow hanging glacier, tributary to Astudillo Glacier, between rock spurs on the west slope of Dallmeyer Peak, Danco Coast, Antarctica.</p>',
			'icon': 'harbor'
			},
			'geometry': {
			'type': 'Point',
			'coordinates': [ -62.749997, -64.8999964]
			}
			},
			{
				'type': 'Feature',
				'properties': {
				'description':
				'<strong>St. Kliment Ohridski Base</strong>62°38′29″S 60°21′53″W<p><a href="https://en.wikipedia.org/wiki/St._Kliment_Ohridski_Base" target="_blank" title="Opens in a new window">St. Kliment Ohridski Base</a> The base, originally known as Sofia University Refuge or Hemus Base, was named in 1993 "for St. Clement of Ohrid (840-916), prominent Bulgarian scholar." The name is often shortened by non-Bulgarians to Ohridski Base, and sometimes misspelt as Ohridiski.</p>',
				'icon': 'harbor'
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [ -60.358831898 ,-62.638164114]
				}
				},
			{
			'type': 'Feature',
			'properties': {
			'description':
			'<strong>Melchior Islands</strong><p>Координати:64°19′S 62°57′W</p><p>The <a href="https://en.wikipedia.org/wiki/Melchior_Islands" target="_blank" title="Opens in a new window"> Melchior Islands </a>  are a group of many low, ice-covered islands lying near the center of Dallmann Bay in the Palmer Archipelago, Antarctica. </p>',
			'icon': 'harbor'
			},
			'geometry': {
			'type': 'Point',
			'coordinates': [  -62.9499962 , -64.3166654]
			}
			},
			{
				'type': 'Feature',
				'properties': {
				'description':
				'<strong> Amundsen–Scott South Pole Station</strong>90°S 0°E<p>The<a href="https://en.wikipedia.org/wiki/Amundsen%E2%80%93Scott_South_Pole_Station" target="_blank" title="Opens in a new window">Amundsen–Scott</a> South Pole Station is the United States scientific research station at the South Pole of the Earth. It is the southernmost point under the jurisdiction (not sovereignty) of the United States. The station is on the high plateau of Antarctica at 2,835 metres (9,301 feet) above sea level.</p>',
				'icon': 'harbor'
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [  -139.2666656, -90.0]
				}
				},
		]
		}
		}
		
	let ArcticDataSet = require('./data2.json');
	

	
		for(let i = 0 ; i < ArcticDataSet.length; i++){

			let s = ArcticDataSet[i].coordinates.split(',')
			
			let lat = parseFloat(s[0]);
			let log =  parseFloat(s[1])
			console.log( ArcticDataSet[i].link)
			let obj = {
				'type': 'Feature',
				'properties': {
				'description':
				'<strong>'+ArcticDataSet[i].name+' Station</strong><p>Координати:64°19′S 62°57′W</p><p> <a href="https://en.wikipedia.org/'+ArcticDataSet[i].link+'" target="_blank" title="Opens in a new window"> Additional infor about this station </a>  ',
				'icon': 'harbor'
				},
				'geometry': {
				'type': 'Point',
				'coordinates': [ log, lat]
				}
				}
			
				places.data.features.push(obj)
		}
		

		
	const mapboxgl = require('mapbox-gl');

	mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGV2IiwiYSI6ImNrYXdtM2Z0aTFkOW0yeW8zeHprbXN2dzQifQ.ekuRQW4KcoocCuILcfxOsw';
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-v9', // style ID
        center: [  0.0 , -90.0], // starting position [lng, lat]
        zoom: 2 // starting zoom
    });

	map.on('load', function () {
		map.addSource('places',places);
			//Arctic Convergention coords
			map.addSource('route', {
				'type': 'geojson',
				'data': {
				'type': 'Feature',
				'properties': {},
				'geometry': {
				'type': 'LineString',
				'coordinates': [
				[0, -50.1],
				[-15, -48],
				[-30, -50],
				[-45 , -55],
				[-65 , -60],
				[-80 , -58],
				[-150 , -65],
				[-180 , -65],
				[-200 , -55],
				[-250 , -50],
				[-300 , -58],
				[-350 , -55],
				[-360 , -50.1],
				]
				}
				}
				});
				map.addLayer({
				'id': 'route',
				'type': 'line',
				'source': 'route',
				'layout': {
				'line-join': 'round',
				'line-cap': 'round'
				},
				'paint': {
				'line-color': '#888',
				'line-width': 8
				}
				});
		// Add a layer showing the places.
		map.addLayer({
		'id': 'places',
		'type': 'symbol',
		'source': 'places',
		'layout': {
		'icon-image': '{icon}-15',
		'icon-allow-overlap': true
		}
		});
		 
		
		map.on('click', 'places', function (e) {
		var coordinates = e.features[0].geometry.coordinates.slice();
		var description = e.features[0].properties.description;
		 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
		 
		new mapboxgl.Popup()
			.setLngLat(coordinates)
			.setHTML(description)
			.addTo(map);
		});
		 
		// Change the cursor to a pointer when the mouse is over the places layer.
		map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
		});
		 
		// Change it back to a pointer when it leaves.
		map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
		});
		});
		
