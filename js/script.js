function initMap() {
  const location = {lat: 43.497277, lng: 1.314723}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: location
  })
  marker = new google.maps.Marker({
    position: location,
    map: map
  })
}