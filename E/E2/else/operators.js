let a = 10000; // стоимость телефона
let b = 1000; // мои деньги
let c = 1000; // деньги друга
const result = b + c

switch (result) {
    case 10000:
        console.log('ты хорош');
        break;
    case 4000:
        console.log('ты ебаный');
        break;
    case 1000:
        console.log('ну ты и черт')
        break;
    default:
        console.log('бля ну хуй знает')
}

if (result < 4000) {
    console.log('полная залупа')
} else {
    console.log('нихуя, норма')
}

text = (result < 4000) ? 'результат МЕНЬШЕ 4000' : 'результат БОЛЬШЕ или равен 4000';
console.log(text);
