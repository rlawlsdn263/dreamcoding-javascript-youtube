// 6. Return a value
function sum (a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`); //sum: 3

//return 타입이 없는 함수들은 
//return undefined가 들어있는 것과 동일하다
//고로, 생략이 가능하다

//모든 함수는 return이 undefined거나
//값을 정해줄 수가 있다