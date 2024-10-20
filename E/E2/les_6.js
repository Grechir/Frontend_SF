let mas = [1, 1, 1, 1, 1];


function mas_identify(mas) {
    for (let i = 0; i < mas.length - 1; i++) {  // i = 0, условие если i меньше длины массива, увеличение i
        if (mas[i] !== mas[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(mas_identify(mas));