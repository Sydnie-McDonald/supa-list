/* eslint-disable no-unused-vars */
// IMPORT MODULES under test here:
import { renderCarDetails } from '..render.js';

const test = QUnit.test;

test('renderCarDetail test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="car-info-container"><img src="../assets/1.jpg"><p class="brand">Honda</p><p class="model">Accord</p><p class="year">2009</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCarDetails({
        id: 1,
        brand: 'Honda',
        model: 'Accord',
        year: '2009',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});