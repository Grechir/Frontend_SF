function nonPrototypeObject () {
     return Object.create(null);  // создание пустого объекта без прототипа
}

const obj = nonPrototypeObject();  // объявление пустого объекта без прототипа

console.log(Object.getPrototypeOf(obj));  // демонстрация отсутствия прототипа у объекта