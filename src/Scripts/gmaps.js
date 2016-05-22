'use strict';
var map;

$(document).ready(function() {
  setupMap();
});

function setupMap() {
  var mapOptions = {
    center: {lat: 59.346027, lng: 18.058272},
    zoom: 12,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('googleMaps'), mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.346027, 18.058272),
    map: map
  });

}
