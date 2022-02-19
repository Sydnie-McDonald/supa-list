export function renderCarData(car) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('plane-data');

    p.textContent = plane.type;
    img.src = `./assets/${plane.id}.png`;
    a.href = `./planesfolder/?id=${plane.id}`;


    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCars(car) {
    const div = document.createElement('div');
    const brandEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const colorAndyearEl = document.createElement('div');

    div.classList.add('car-lists-container');

    brandEl.textContent = car.brand;
    brandEl.classList.add('brand');

    modelEl.textContent = car.model;
    modelEl.classList.add('model');

    yearEl.textContent = car.year;
    yearEl.classList.add('year');

    colorEl.textContent = car.color;
    colorEl.classList.add('color');

    colorAndyearEl.classList.add('color-and-year');

    colorAndyearEl.append(colorEl, yearEl);


    div.append(brandEl, modelEl, colorAndyearEl);

    return div;
}