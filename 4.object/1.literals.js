// Objects
//one of the JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object

//object = {key: value};
//object는 key와 value의 집합체다!
//key -> 우리가 접근할 수 있는 변수
//value -> 그 변수의 값


//1. Literals and Properties
//Primitive Type은 변수 하나당 
//값을 하나만 담을 수 있다.
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

const ellie = {
    name: 'ellie',
    age: 4,
};
print(ellie);
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

//object를 만드는 방법은?
//JS에서는 Class가 없어도 괄호로 바로 object 생성이 가능!
const obj = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

//JS는 dynamically typed language이기 떄문에
//타입이 동적으로, runtime 때 결정된다!
const ellie = {
    name: 'ellie',
    age: 4,
}; 
print(ellie);

//그렇기 때문에 뒤늦게 property를 추가할 수 있다.
//유지 보수에 좋지않다.
ellie.hasJob = true;
console.log(ellie.hasJob); // true

//삭제도 가능하다
delete ellie.hasJob;
console.log(ellie.hasJob); //undefined