//in operator: property existence check(key in obj)
//해당 obj 안에 key가 있는지 확인해준다
const ellie = {
    name: 'ellie',
    age: 4,
};

console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie); //false

//정의하지 않은 key를 접근하면 undefined가 출력됨
console.log(ellie.random); //undefined
