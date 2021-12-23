/* 1. JSON 객체 실습 */
// JSON은 객체가 표현되는 형식. Object의 일부 x
const sopt = {
    name: 'WE SOPT',
    slogan: '우리는 SOPT입니다',
    part: ['plan', 'design', 'android', 'iOS', 'server', 'web'],
    number: 199,
    printName: function() {
        console.log("number: ", this.number);
    },
};

console.log("type of sopt: ", typeof sopt);

// + 와 , 의 차이가 무엇일까요?