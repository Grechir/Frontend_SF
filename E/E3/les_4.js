// // Function Expression

const intervalFunc = function(start, end) {
    let current = start
    let timerId = setInterval(function () {
        console.log(current)

        if (current === end) {
            clearInterval(timerId)
        }                               // Условие выхода из цикла

        current++

    }, 1000)
}

intervalFunc(5, 15)


// Function Declaration

function intervalFunc2(start, end) {
    let current = start
    let timerId = setInterval(function () {
        console.log(current)

        if (current === end) {
            clearInterval(timerId)
        }                               // Условие выхода из цикла

        current++

    }, 1000)
}

intervalFunc2(5, 15)