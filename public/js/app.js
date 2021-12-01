console.log('Client-side JS file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    message1.textContent = 'Loading...';
    message2.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then(({error, forecast, location}) => {
        if (error) {
            message1.textContent = error;
            message2.textContent = '';
        } else {
            message1.textContent = location;
            message2.textContent = forecast;
        }
    });
});
});