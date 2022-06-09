// 4. Rest Parameters (added in ES6)
// 인자로 ... 을 하면 Rest Parameters라고 불리는데 
// 배열 형태로 전달된다

function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

//...을 했기 때문에 args에 배열로 전달된다
printAll('dream', 'coding', 'ellie');
//dream
//coding
//ellie

//배열을 출력할 때는 for...of를 사용하는 방법도 있다
//훨씬 간결한 코드로 배열의 요소들을 출력할 수 있다
function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');
//dream
//coding
//ellie

//배열을 사용한다면 .forEach()를 사용할 수도 있다
function printAll(...args) {
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');
//dream
//coding
//ellie

//function은 object라는 말이 있는데
//printAll.을 하면 사용할 수 있는 여러 메소드가 나온다.