/* 3.constant, r(read only) */
// 할당하면 값이 절대 변하지 않음 

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// In JS, there is mutable type 'let' and immutable type 'const'
// JS에서는 변수를 선언할 때 mutable 타입의 let과 immutable 타입의 const가 있다
