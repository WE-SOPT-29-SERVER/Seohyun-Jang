/* Object 생성자 함수 */
const person = new Object();

// 프로퍼티 추가
person.name = "장서현"; // 점표기법 접근
person.part = "Server";
person["group"] = "OB"; // 브라켓 표기법 접근
person.sayHello = function() {
    console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log("type of person: ", typeof person);
console.log(person);

person.sayHello();

console.log("=================");

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
// const emptyObject = {}; // 빈 객체 생성
// console.log("type of emptyObject: ", typeof emptyObject);

// const animal = {
//     animalType: "dog",
//     animalName: "삐뽀",
//     animalFriends: ["뽀삐", '뽀뽀', '초코'],
//     bark: function() {
//         console.log("왈왈와로아로아뢀");
//     },
//     thisFriends: function() {
//         this.animalFriends.forEach(friend => {
//             console.log(`${this.animalName}의 친구: ${friend}`);
//         });
//     }
// };

// console.log(animal);
// animal.bark();
// animal.thisFriends();


// 화살표 함수 안에서 this 사용할 때
// 객체 내에 있는 프로퍼티들에 대해 화살표함수 쓰려면 파라미터로 받아오면 되겠군요 ~
const animal = {
    animalType: "dog",
    animalName: "뽀삐",
    animalFriends: ["코코", "초코", "쿠키"],
    bark: () => {
        console.log(`${this.animalName} : 멍멍 `);
    },
    thisFriends: (animalFriends) => {
        animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends(animal.animalFriends);