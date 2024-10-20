// функция принимает число 'a' и возвращает функцию, которая принимает число 'b' и возвращает 'a+b'

function func1 (a) {
    return function (b) {
        return a + b;
    }
}

const sumFunc = func1(5)
const result = sumFunc(4)

console.log(result)