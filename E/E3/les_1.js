let array = [1, 2, 4, 5, 10, 0, NaN, NaN, NaN, 0, 6, false, undefined, 3, 7];
let even_counter = 0,
    odd_counter = 0,
    zero_counter = 0;

function counter(array) {
    for (let i of array) {
        if (typeof i === 'number' && !isNaN(i)) {
            if (i === 0) {
                zero_counter++;
            } else if (i % 2 === 0) {
                even_counter++;
            } else {
                odd_counter++;
            }
        }
    }
    return `Четных чисел в массиве - ${even_counter}, Нечетных чисел - ${odd_counter}, Нулей - ${zero_counter} `
}

console.log(counter(array));