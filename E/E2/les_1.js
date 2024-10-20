let num = prompt('Введите значение: ');
num = +num // number

if (typeof num === 'number' && !isNaN(num)) {
    if (num === 0) {
        console.log('Ноль')
    } else if (num % 2 === 0) {
        console.log('Четное число')
    } else {
        console.log('Нечетное число')
    }
} else {
    console.log('Упс, вы ввели парашу')
}

// ЗДЕСЬ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ - prompt, ТОЛЬКО В БРАУЗЕРЕ