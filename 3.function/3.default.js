//3.Default parameters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}

//두번째 인자를 받지 않았기 떄문에 undefined가 출력됨
showMessage('Hi!'); //Hi! by undefined

//과거에는 이런 일을 방지하기 위해 함수 안에 
//if문을 작성해뒀다
function showMessage(message, from) {
    if(from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}

showMessage('Hi'); //Hi! by unknown

//오늘에는 인자에서 바로 기본값을 설정할 수 있다
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi'); //Hi! by unknown