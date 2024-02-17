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

// let slideIndex = 0;
// showSlides();

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

const folder  = ''
async function showSlides() {
  let i;
  const slides = document.getElementsByClassName("test");
  for (i = 0; i < slides.length; i++) {
    const regex = /coupe_(\d+)\.png/
    const match =  slides[i].src.match(regex)
    let valeur = 1
    if (parseInt(match[1]) < 8) valeur = parseInt(match[1]) + 1
    const newUrl = `http://127.0.0.1:5500/img/coupe/coupe_${valeur}.png`
    slides[i].src = newUrl
  }
  // setTimeout(showSlides, 2000);
}