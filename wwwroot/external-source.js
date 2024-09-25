var initMap = function (source, destination) {
    return new Promise((resolve, reject) => {
        const directionsService = new google.maps.DirectionsService();
        directionsService
            .route({
                origin: {
                    query: source,
                },
                destination: {
                    query: destination,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((response) => {
                if (response && response.routes && response.routes[0] && response.routes[0].legs[0]) {
                    const coordinates = response.routes[0].legs[0];
                    const startLocation = {
                        latitude: coordinates.start_location.lat(),
                        longitude: coordinates.start_location.lng()
                    };
                    const endLocation = {
                        latitude: coordinates.end_location.lat(),
                        longitude: coordinates.end_location.lng()
                    };
                    const path = coordinates.steps.map(step => ({
                        latitude: step.start_location.lat(),
                        longitude: step.start_location.lng()
                    }));
                    resolve({
                        startLocation: startLocation,
                        endLocation: endLocation,
                        path: path
                    });
                } else {
                    reject("No routes found.");
                }
            })
            .catch((e) => window.alert("Directions request failed due to " + e));
    });
};