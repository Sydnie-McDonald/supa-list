import { getCar } from '../fetch-utils.js';
import { renderCarDetails } from '../render.js';

const carInfoContainer = document.getElementById('car-info-container');


window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const car = await getCar(id);
    console.log(car);

    const carInfo = renderCarDetails(car);
    carInfoContainer.append(carInfo);

});