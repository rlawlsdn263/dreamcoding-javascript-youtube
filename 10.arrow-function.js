//Arrow function

//항상 이름이 없다!
//always anonymous
const simplePrint = function () {
    console.log('print!');
};
const simplePrint =  () => console.log('print!');

const add = function(a, b) {
    return a + b;
};

const add = (a, b) => a + b;

//블록이 있는 경우
//블록을 쓸 경우에는 return 키워드를 사용해
//값을 return 해야한다
const simpleMultiply = (a, b) => {
    //dp something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression
//원래 함수를 호출할 때는 선언하고 함수 이름()을 해야했다

function hello() {
    console.log('IIFE');
}
hello(); //IIFE

//함수 자체를 ()로 묶은 다음에 다시 ()를 사용하면 즉시출력이 된다
(function hello() {
    console.log('IIFE');
})();

