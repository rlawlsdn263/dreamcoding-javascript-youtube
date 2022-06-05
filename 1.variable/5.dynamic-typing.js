//5. Dynamic typing: dynamically typed language
//C, JAVA - Statically typed language
//변수 선언 시, 타입을 같이 선언
//JavaScript
//변수 선언 시, 따로 타입 선언X
//runtime, 프로그램이 동작할 때 '할당된 값'에 따라서 타입이 변경 

let text='hello';
console.log(text, typeof text); //hello, string
text = 1;
console.log(text, typeof text); //1, number

//string과 number을 더하면? (string도 + 가능)
text = '7' + 5;
console.log(text, typeof text); //75, string

//string과 string을 나누면? (number만 / 가능)
text = '8' / '2';
console.log(text, typeof text); //4, number

//string이 중간에 number로 변경되면?
//JS는 런타임에서 타입이 결정되기 때문에 에러 발생 가능
//이걸 보완하기 위해 나온게 TS
let text='hello';
console.log(text.charAt(0)); //h
text = '8' / '2';
console.log(text.charAt(0)); //Error!
