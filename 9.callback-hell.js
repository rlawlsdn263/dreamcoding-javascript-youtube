//callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        //정답일 때 호출되는 함수
        printYes();
    } else {
        //오답일 때 호출되는 함수
        printNo();
    }
}

//anonymous function
const printYes = function() {
    console.log('yes');
}

//named function
//디버깅에 도움됨
//better debugging in debugger's stack traces
//함수 안에서 자신을 또 호출할 때 사용됨
//recursions
const printNo = function print() {
    console.log('no');
    print(); //무한대로 호출됨! 콜스택이 꽉 차서 에러가 남!
}

randomQuiz('wrong', printYes, printNo); //no
randomQuiz('love you', printYes, printNo); //yes