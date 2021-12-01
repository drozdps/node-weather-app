const request = require('postman-request');

const geocode = (address, callback) => {
    // Geocoding
    // Address -> Lat/Long -> Weather
    const mapbox_token = 'pk.eyJ1IjoiZHJvemRwcyIsImEiOiJja3VhNmc5M2YwZGx2MnJtcjc2cTNudHhvIn0.DKHubw7esRWH_ufJ0JfidA';
    const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=' + mapbox_token;

    request({url: mapbox_url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to geolcation service!', undefined);
        } else if (!body.features || body.features.length === 0) {
            callback('Unable to find location ' + (body.message ? ': ' + body.message : ''), undefined);
        } else {
            const feature = body.features[0];
            callback(undefined, {
                latitude: feature.center[1],
                longitude: feature.center[0],
                location: feature.place_name
            });
        }
    });

}

module.exports = geocode