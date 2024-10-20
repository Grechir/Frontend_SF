// первый способ
const func = (x, n) => console.log(x**n)

func(5, 3)

// второй способ (как на курсе)
const func2 = (x, n) => {
    let result = x

    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result;
}

result = func2(5, 3)
console.log(result)