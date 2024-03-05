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

let checkboxValue = 'coupe'
const checkbox = document.getElementById('slide')
checkbox.addEventListener('click', function() {
  checkboxValue = this.checked ? 'coupe' : 'magasin'
  checkbox.value = checkboxValue
  showSlides(null)
})

async function showSlides(action = null) {
  const folderLength = checkboxValue === 'magasin' ? 7 : 6
  const slides = document.getElementsByClassName("test")
  for (let i = 0; i < slides.length; i++) {
    const regex = /(\d+)\.webp/
    const currentPictureValue =  parseInt(slides[i].src.match(regex))

    if (action === 1) newPictureValue = currentPictureValue === folderLength ? 1 : currentPictureValue + 1
    else if (action === -1) newPictureValue = currentPictureValue === 1 ? folderLength : currentPictureValue - 1
    else newPictureValue = i + 1

    const urlPath =  slides[i].src.substring(0, slides[i].src.indexOf("/img"))
    const newUrl = `${urlPath}/img/${checkboxValue}/${checkboxValue}_${newPictureValue}.webp`
    slides[i].src = newUrl
  }
}