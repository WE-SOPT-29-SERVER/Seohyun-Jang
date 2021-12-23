/* 1. 함수 선언식 실습 */

function add(x, y) {
    return x + y;
}
console.log(add(2, 3));

/* 2. 함수 표현식 실습 */

const addStr = function(x, y) {
    return x + y;
};
console.log(addStr("안녕", "하세요"));

/* 3. 함수 표현식 실습 */
/* - 화살표 함수 */

const add = (x, y) => x + y;

const square = x => x * x;

const person = (name, age) => ({name: name, age: age});

const person = function (name, age) {
    return {
        name: name,
        age: age
    };
};


