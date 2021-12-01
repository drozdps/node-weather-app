const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=01b738116707e129e101810b499f3e8c&query=' + latitude + ',' + longitude; 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback(body.error.info, undefined);
        } else {
            const {temperature, feelslike, weather_descriptions: description} = body.current;
            callback(undefined, {
                temperature,
                feelslike,
                description
            })

        }
    });
}

module.exports = forecast