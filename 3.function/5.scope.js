// 5. Local Scope

//JS에서 스코프란!
//밖에서는 안이 보이지 않고
//안에서만 밖을 볼 수 있다

let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello!'
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

//중첩된 함수에서는 자식의 함수가 부모 함수에서  
//정의된 변수에 접근이 가능하지만 반대는 X

let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello!'
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let ChildMessage = 'hello';
    }
}
printMessage(); 