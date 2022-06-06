/* 2.Variable, rw(read/write) */
// let (added in ES6)

//선언과 동시에 값할당
let name = 'ellie';
console.log(name); //ellie

//선언된 변수에 값을 재할당 
name = 'hello';
console.log(name); //hello

//블록 스코프(Block Scope)
//블록 내부에 코드를 작성하면 외부에서는 읽기가 불가

{
    let name = 'ellie';
    console.log(name); //ellie
    name = 'hello';
    console.log(name); //hello
}
console.log(name); //X

//글로벌 스코프(Global Scope)
//파일 안에 바로 정의해서 쓰는 변수들
//어느 곳에서나 접근이 가능하다 (블록 내부에서도)
//글로벌 변수들은 계속 메모리에 탑재됐기 때문에 최소한으로 사용

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name); //ellie
    name = 'hello';
    console.log(name); //hello
    console.log(globalName); //global Name
}
console.log(name); //X
console.log(globalName); //global Name

//var (don't ever use this!)
//선언하기 전에 값을 할당, 출력할 수 있다

//var hoisting (move declaration from bottom to top)
//호이스팅은 선언 위치에 상관없이 가장 위로 끌어올리는 걸 뜻함


console.log(age); //undefined
age = 4;
console.log(age); //4
var age;

name = 4; //Error!
let name;

//var has no block scope

{
    age = 4;
    var age;
}
console.log(age); //4 