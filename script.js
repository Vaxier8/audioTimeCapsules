var map = L.map('map').setView([51.505, -0.09], 13); // Default view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to place a marker on the map at the user's location
function placeMarker(position) {
    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;
    var userLocation = L.latLng(userLat, userLong);

    map.setView(userLocation, 13); // Center the map on the user's location

    var marker = L.marker(userLocation).addTo(map);
    marker.bindPopup("You are here").openPopup();
}

// Function to handle errors in obtaining the geolocation
function locationError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    alert('Error obtaining location, defaulting to initial view.');
}

// Request the user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(placeMarker, locationError);
} else {
    alert("Geolocation is not supported by this browser.");
}

// Call locateUser function to execute when the script loads
locateUser();
