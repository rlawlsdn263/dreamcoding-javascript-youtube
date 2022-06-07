//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable - 변수처럼 할당이 된다
//can be passed as an argument to other functions - 인자로 전달이 된다
//can be returned by another function - return 값으로도 사용된다

//Function Expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.

//함수를 선언함과 동시에 print에 할당
//다음처럼 이름없는 함수를 anonymous function이라 부른다
//이름을 붙일 수도 있는데 그건 named function이라 부른다
const print = function() { //anonymous function
    console.log('print');
};
//print라는 변수에 함수를 호출하듯이 ()를 사용하면 print가 출력된다
print();

//다른 변수에 print를 할당하면 동일하게 호출할 수 있다
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

//function declaration은 hoisting이 된다!
//JS엔진은 선언된 것을 가장 위로 올려주기 때문에 호출이 된다!