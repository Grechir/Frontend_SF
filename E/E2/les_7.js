let array = [1, 2, null, 0, 'x', 25, 'виталя', false, 32, 48, 6, 71, 0]
let even_counter = 0  // четное число
let odd_counter = 0  // нечетное число
let zero = 0

array.forEach(function (item) {
    if (typeof item === 'number' && !isNaN(item)) {  // исключаем NaN, но не исключаем 0
        if (item === 0){
            zero++
        } else if (item % 2 === 0) {
            even_counter++
        } else {
            odd_counter++
        }
    }
})

console.log(`Четных чисел в массиве - ${even_counter}, Нечетных чисел - ${odd_counter}, Нулей - ${zero} `);

