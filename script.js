var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
function onMapClick(e) {
    var marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup("Your tagged location").openPopup();
}
map.on('click', onMapClick);
function locateUser() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;
            var userLocation = L.latLng(userLat, userLng);

            map.setView(userLocation, 13); // Adjust the zoom level as needed
            L.marker(userLocation).addTo(map).bindPopup("You are here").openPopup();
        }, function() {
            alert("Unable to access your location. Please enable location services in your browser.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Call locateUser function to execute when the script loads
locateUser();
