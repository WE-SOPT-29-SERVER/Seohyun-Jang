const add= (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

module.exports = [add, subtract, multiply, divide];

// key, value가 똑같으면 key만 써도 ㄱㅊ!
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }