var map, infoWindow;
console.log(mylist)

function createMap () {
  var options = {
    center: { lat: 43.654, lng: -79.383 },
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById('map'), options);
}
