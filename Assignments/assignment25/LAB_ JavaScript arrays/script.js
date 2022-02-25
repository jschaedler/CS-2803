// Put your solution here
function divideArray(numbers) {
    var mul3 = []
    var non3 = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 3 == 0) {
            mul3.push(numbers[i])
        } else {
            non3.push(numbers[i])
        }
    }
    mul3.sort(function (a, b) {
        return a-b
    })
    non3.sort(function (a, b) {
        return b-a
    })

    console.log("Multiples of 3:")
    if (mul3.length === 0) {
        console.log("None")
    } else {
        for (let i = 0; i < mul3.length; i++)
            console.log(mul3[i])
    }
    console.log("Non Multiples of 3:")
    if (non3.length === 0) {
        console.log("None")
    } else {
        for (let i = 0; i < non3.length; i++)
            console.log(non3[i])
    }
}