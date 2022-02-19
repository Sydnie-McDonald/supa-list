export function renderCars(car) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('car-data');

    p.textContent = car.type;
    img.src = `./assets/${car.id}.jpg`;
    a.href = `./car/?id=${car.id}`;


    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCarDetails(id) {
    const div = document.createElement('div');
    const brandEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');

    div.classList.add('car-lists-container');

    brandEl.textContent = id.brand;
    brandEl.classList.add('brand');

    modelEl.textContent = id.model;
    modelEl.classList.add('model');

    yearEl.textContent = id.year;
    yearEl.classList.add('year');


    div.append(brandEl, modelEl, yearEl);

    return div;
}