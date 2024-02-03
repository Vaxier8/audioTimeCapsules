var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
function onMapClick(e) {
    var marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup("Your tagged location").openPopup();
}
map.on('click', onMapClick);
