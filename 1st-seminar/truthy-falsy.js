const num1 = 1;
const num2 = 2;
const str = '2';

const bool = true;

console.log(num1 == bool); // 1 -> true
console.log(num2 == bool);


// Boolean으로 TypeCasting해서 확인
// 값이 있는지 없는지 검사할 수 있는 가장 간단한 방법
// 비어있는건 문자열만 Falsy,, 객체는 비어있어도 Truthy ,, why ,,?
// Truthy
// 대충 True다
console.log(Boolean(10));
console.log(Boolean(-41));
console.log(Boolean('안녕'));
console.log(Boolean([]));
console.log(Boolean({}));

// Falsy
// 대충 False다
// false, 0, null, undefined
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));