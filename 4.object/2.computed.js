//2. Computed Properties

const ellie = {
    name: 'ellie',
    age: 4,
}

//.을 이용한 접근법
//코딩하는 순간 해당하는 key를 불러오고 싶을 때
console.log(ellie.name); //ellie

//[]를 이용한 접근법
//key는 문자형으로 불러야한다
//runtime에서 결정될 때. 정확히 어떤 key를 가져와야하는 지 모를떄

console.log(ellie[name]); //undefined
console.log(ellie['name']); //ellie

//computed properties를 이용해 값을 추가할 수 있다
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

//conputed propertied 예시
function printValue(obj, key) {
    console.log(obj.key); //undefined
    console.log(obj[key]); //ellie
}

//key는 항상 string 타입으로 전달
//동적으로 key의 value를 받아와야할때 유용함!
printValue(ellie, 'name');
printValue(ellie, 'age');

