// Function Declaration

let num = 9973

function check_prime(num) {
    if (typeof num === "number" && !isNaN(num) && num > 1) {

       for (let i = 2; i <= num**0.5; i++) {
            if (num % i === 0) {
                return 'Число сложное'
            }
       }
       return 'Число простое'

    } else {
        return 'Данные неверны'
    }
}

console.log(check_prime(num));
