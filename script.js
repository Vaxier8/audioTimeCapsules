var map = L.map('map').setView([51.505, -0.09], 13); // Default view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var userMarker = null; // Marker for the user's location
function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var newUserLocation = L.latLng(position.coords.latitude, position.coords.longitude);

            if (userMarker) {
                userMarker.setLatLng(newUserLocation); // Move existing marker
            } else {
                userMarker = L.marker(newUserLocation).addTo(map); // Create new marker
            }

            map.setView(newUserLocation, 13); // Center map on new location
            userMarker.bindPopup("Updated location: You are here").openPopup();
        }, function(error) {
            console.error("Error obtaining location: ", error);
            alert("Error obtaining location. Please ensure location services are enabled and try again.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

document.getElementById('updateLocation').addEventListener('click', updateLocation);
