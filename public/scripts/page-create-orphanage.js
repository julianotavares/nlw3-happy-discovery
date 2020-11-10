// create map
const map = L.map("mapid").setView([-17.5674154, -52.5546287], 15);
// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // take container of photos #images
  const container = document.querySelector('#images');

  // take container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //  make clone of the last added image
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //  verify if field is empty, if yes, didn't add images
  const input = newFieldContainer.children[0]

  if(input.value == "") {
    return
  }

  // cleaner field before add container of images
  input.value = "";

  //  add the clone to container of #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length < 2) {
  //  clear field
    span.parentNode.children[0].value = ""
    return
  }
  // delete field
  span.parentNode.remove();


}

// choose select yes or no
function toggleSelect() {
  // remove active class of buttons
  document.querySelectorAll('.button-select button')
  .forEach( function (button) {
    button.classList.remove('active')
  })

  //  put active class
  const button = event.currentTarget
  button.classList.add('active')

  //  get the active button

  //  update the input hidden with the new value
  const input = document.querySelector('[name="open-on-weekends"]')

  input.valeu = button.dataset.value
  //  verify if yes or no

}