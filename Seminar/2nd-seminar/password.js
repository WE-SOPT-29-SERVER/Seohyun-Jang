const fs = require("fs")

const readPW = () => {
    fs.readFile('password.txt', (err, data) => {
        if(err) return console.log(err.message);
        return `${data}`;
    });
}

const password = readPW()
console.log(password)

