import { getCar } from '../fetch-utils.js';
import { renderCarDetails } from '../render.js';

const carInfoContainer = document.getElementById('car-info-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const car = await getCar(id);
    console.log(car);

    const carInfo = renderCarDetails(id);
    carInfoContainer.append(carInfo);

});