/* 4.Variable Types */

//primitive, single item: number, string, boolean, null, undefined, symbol
//하나의 데이터 타입

//object, box container
//object는 데이터 묶음

//function, first-class function
//함수도 다른 데이터 타입처럼 변수에 할당이 가능
//함수의 인자로도 전달이 가능
//return 타입으로도 return이 가능

//number
//JS에서는 number data type은 하나뿐이다.
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`); //value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); //value: 17.1, type: number

//number special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

//bigInt (fairly new, don't use it yet);
//뒤에 n을 붙이면 bigInt가 된다
const bigInt = 123456789012345678901234567890n; //over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); //type: bigint
Number.MAX_SAFE_INTEGER; 

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; 
console.log(`value: ${greeting}, type: ${typeof greeting}`); //hello brendan, string
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //hi brendan!, string

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`); //true, boolean
console.log(`value: ${test}, type: ${typeof test}`); //false, boolean

//null
//값이 할당이 된 거지만 그게 빈 값인 경우.
//내가 의도적으로 값을 비게 만든 것.
let nothing = null;
console.log(`value: ${nothing}, types: ${typeof nothing}`);


//undefined
//선언은 됐지만 아무것도 값이 지정되지 않은 것.
//값이 들어갔는지 비었는지 조차 정해지지 않은 상태.
let x; //undefined
let x = undefined; //undefined
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
//고유한 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

//symbol은 그냥 출력하면 error가 발생
//.description을 이용해 string으로 변환해서 출력해야 함!
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`); //value: id, type: symbol