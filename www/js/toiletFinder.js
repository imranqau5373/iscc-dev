var map;
var icon = "http://path/to/icon.png";
var json = "http://path/to/universities.json";
var infowindow = new google.maps.InfoWindow();
function initialize() {

    var mapProp = {
        center: new google.maps.LatLng(52.4550, -3.3833), //LLANDRINDOD WELLS
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    //  $.getJSON(json, function(json1) {
    var json1 = {
        "universities": [
            {
                "title": "Aberystwyth University",
                "website": "www.aber.ac.uk",
                "phone": "+44 (0)1970 623 111",
                "lat": 52.415524,
                "lng": -4.063066},
            {
                "title": "Bangor University",
                "website": "www.bangor.ac.uk",
                "phone": "+44 (0)1248 351 151",
                "lat": 53.229520,
                "lng": -4.129987},
            {
                "title": "Cardiff Metropolitan University",
                "website": "www.cardiffmet.ac.uk",
                "phone": "+44 (0)2920 416 138",
                "lat": 51.482708,
                "lng": -3.165881}
        ]
    };
    $.each(json1.universities, function (key, data) {

        var latLng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            // icon: icon,
            title: data.title
        });

        var details = data.website + ", " + data.phone + ".";

        bindInfoWindow(marker, map, infowindow, details);

        //    });

    });

}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);