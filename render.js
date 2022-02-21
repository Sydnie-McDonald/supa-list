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

export function renderCarDetails(car) {
    const div = document.createElement('div');
    const brandEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('car-info-container');

    brandEl.textContent = car.brand;
    brandEl.classList.add('brand');

    modelEl.textContent = car.model;
    modelEl.classList.add('model');

    yearEl.textContent = car.year;
    yearEl.classList.add('year');

    img.src = `../assets/${car.id}.jpg`;

    div.append(img, brandEl, modelEl, yearEl);
    return div;
}