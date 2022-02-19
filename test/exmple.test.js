// IMPORT MODULES under test here:
import { renderCarDetails } from '..render.js';

const test = QUnit.test;

test('renderCarDetail test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plane-detail"><h2 class="type">Jumbo Jet.</h2><img src="../assets/1.png"><p class="speed">Medium speed intercontinental distance.</p><p class="size">Large.</p></div>`;

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