import { getCars } from './fetch-utils.js';
import { renderCars } from './render.js';

const carList = document.getElementById('cars');

window.addEventListener('load', async() => {
    const cars = await getCars();
    for (let car of cars) {
        const carDiv = renderCars(car);
        carList.append(carDiv);
    }

});