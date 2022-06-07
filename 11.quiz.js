//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

//입력받은 커맨드에 따라 동작하는 계산기

//내 정답
function calculate(command, a, b) {
    if(command === 'add') {
        return a + b;
    }
    if(command === 'substract') {
        return a - b;
    }
    if(command === 'divide') {
        return a / b;
    }
    if(command === 'multiply') {
        return a * b;
    }
    if(command === 'remainder') {
        return a % b;
    }
    console.log('try again');
}

//엘리 정답
//정해진 데이터를 처리할 때는 switch문을 사용할 것!
function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'reminder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}