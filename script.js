var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


var userMarker; // Declare a variable for the marker outside the function

// Function to update the marker's position on the map
function updateMarker(position) {
    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;
    var newUserLocation = L.latLng(userLat, userLong);

    if (userMarker) {
        // If a marker already exists, just update its position
        userMarker.setLatLng(newUserLocation);
    } else {
        // If no marker exists, create one and add it to the map
        userMarker = L.marker(newUserLocation).addTo(map);
        userMarker.bindPopup("You are here").openPopup();
    }

    map.setView(newUserLocation); // Center the map on the new location
}

// Function to handle errors in obtaining the geolocation
function locationError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    alert('Error obtaining location. Please try again.');
}

// Start watching the user's position
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateMarker, locationError, {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000
    });
} else {
    alert("Geolocation is not supported by this browser.");
}



// Call locateUser function to execute when the script loads
locateUser();
