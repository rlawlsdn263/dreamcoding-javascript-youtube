//2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //nultiply
console.log(5 % 2); //reminder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 1;
const preIncrement = ++counter;
console.log(preIncrement, counter); //2, 2
//counter = counter + 1;
//preIncrement = counter;
//counter의 값을 1 증가시킨 후 counter에 재할당하고,
//preIncrement에 counter를 할당한다
//앞에 있으면 바로 업데이트된 값을 할당함!

let counter = 1;
const postIncrement = counter++;
console.log(postIncrement, counter); //1, 2
//postIncrement = counter;
//counter = counter + 1;
//counter의 값을 postIncrement에 할당한 다음에,
//그 뒤에 counter의 값을 1 증가시킴
//뒤에 있으면 값을 할당한 후에 업데이트함!

//마이너스에서도 동일하게 적용
//--counter, counter--

//4. Assignment operators
let x = 3;
let y = 6; 
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison Operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than equal

//6. Logical Operators: ||(OR), &&(AND), !(NOT)
const value1 = false;
const value2 = 4 < 2;

//|| (or), finds the first truthy value
//value1이 true라면 or은 동작을 바로 끝낸다
console.log(value1 || value2 ||)

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('waiting');
    }
    return true;
}

//&& (and), value1이 false라면 동작을 바로 끝낸다
console.log(value1 && value2 && check());

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('waiting');
    }
    return true;
}

//AND 연산자는 null 체크에도 많이 쓰인다
//oft0en used to compress long if-statement
//nullableObject && nullableObject.somthing
if (nullableObject != null) {
    nullableObject.something;
}

//! (NOT) 
//값을 반대로 바꿔준다. 
console.log(!value1);
//value1이 false면 true로 바꿔준다.
//value1이 true면 false로 바꿔준다. 

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion 
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
// object는 메모리에 참조값이 담긴다
// 그렇기 때문에 같은 값을 담고 있어도 참조값이 다르다.
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false 
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
