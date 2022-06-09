//6. for..in vs for..of
//for (key in obj)

//for 루프를 in 키워드를 이용해 사용가능
//모든 key들을 받고 싶을 때 사용

const ellie = {
    name: 'ellie',
    age: 4,
    hasJob: true,
};

for(key in ellie) {
    console.log(key);
    //name
    //age
    //hasJob
}

//for...of
//for (value of iterable)
//obj말고 배열과 같은 배열리스트에 사용
//순차적으로 iterable한
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

for(value of array) {
    console.log(value);
}