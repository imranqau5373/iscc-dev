
function initMap(){
//element to dump it in (id Map) and options

//map options
var options = {
	zoom:15
//	center:{lat:42.3601, lng:-71.0589}
}
 infoWindow = new google.maps.InfoWindow;
//new map
var map = new google.maps.Map(document.getElementById('map'),options);

if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
             infoWindow.setPosition(initialLocation);
             infoWindow.setContent('You are here');
         	  infoWindow.open(map);
             });
     }
/* Code for one marker at a time 
// Add marker
var marker = new google.maps.Marker({
	position:{lat:42.4668,lng:-70.9495},
	//map we want to add it to.
	map:map,
	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});

var infoWindow = new google.maps.InfoWindow({content:'<h1>You are here</h1>'});

marker.addListener('click', function(){
	infoWindow.open(map, marker);
});
*/

//Arry of Markers 

var markers = [
	{
		coords:{lat:42.3601, lng:-71.0589},
		iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		content:'<h1>You are here </h1>'
	},
	{	coords:{lat:42.8584, lng:-70.9300},
		content:'<h1>Location 1 </h1>'
	},
	{coords:{lat:42.7762, lng:-71.0773},content:'<h1>Location 1 </h1>'}


];

//Loop through markers
for(var i = 0; i < markers.length; i++){
	//Add marker
	addMarker(markers[i]);
}

// addMarker({coords:{lat:42.3601, lng:-71.0589},iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
// 	content:'<h1>You are here </h1>'
// });
// addMarker({coords:{lat:42.8584, lng:-70.9300},content:'<h1>Location 1 </h1>'});
// addMarker({coords:{lat:42.7762, lng:-71.0773},content:'<h1>Location 1 </h1>'});

// Add Marker Function
function addMarker(props){
	var marker = new google.maps.Marker({
	position:props.coords,
	map:map,
	//without icon image icon is undefined, not ideal
	//icon:props.iconImage
	
});
	//Check for custom icon
	if(props.iconImage){
		//set Icon Image
		marker.setIcon(props.iconImage);
	}

	//Check for content
	if(props.content){
		var infoWindow = new google.maps.InfoWindow({
			content:props.content
	});

		marker.addListener('click', function(){
		infoWindow.open(map, marker);

	});
}
}
}