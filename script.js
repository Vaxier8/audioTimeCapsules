var userMarker; // Do not initialize it yet

var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var userMarker = L.marker([0, 0], {opacity: 10}); // Initialize off the map
    map.addLayer(userMarker); // Add to map to manage visibility later

    // Function to update location, simplified for this example
    function getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var newUserLocation = L.latLng(position.coords.latitude, position.coords.longitude);
                
                if (userMarker) {
                    // Marker exists, update its position
                    userMarker.setLatLng(newUserLocation);
                } else {
                    // Marker doesn't exist, create it and add to the map
                    userMarker = L.marker(newUserLocation).addTo(map);
                }
                
                map.setView(newUserLocation, 13); // Center the map on the new location
                userMarker.bindPopup("You are here").openPopup();
    
            }, function(error) {
                alert("Error obtaining location. Please ensure location services are enabled and try again.");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    



// Call locateUser function to execute when the script loads
locateUser();
