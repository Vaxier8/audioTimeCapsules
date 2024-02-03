var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


var userMarker; // Declare a variable for the marker outside the function

// Function to update the marker's position on the map
function updateMarker(position) {
    var newUserLocation = L.latLng(position.coords.latitude, position.coords.longitude);

    if (userMarker) {
        userMarker.setLatLng(newUserLocation);
    } else {
        userMarker = L.marker(newUserLocation).addTo(map);
        map.setView(newUserLocation, 13);
    }
}


// Function to handle errors in obtaining the geolocation
function locationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.error("Location permission was denied.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        default:
            console.error("An unknown error occurred.");
            break;
    }
}

// Start watching the user's position
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updateMarker, locationError, {
        enableHighAccuracy: true, // Consider testing with false as well
        maximumAge: 5000,
        timeout: 15000 // Increase timeout to allow more time for location updates
    });    
} else {
    alert("Geolocation is not supported by this browser.");
}



// Call locateUser function to execute when the script loads
locateUser();
