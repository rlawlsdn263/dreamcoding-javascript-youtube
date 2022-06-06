//object, real-lif object, data-structure
//오브젝트는 데이터 묶음이기 때문에 let, const와는 다르게 메모리에 저장X
//대신에 reference(참조값)이 생기는데 이 참조값이 오브젝트가 담긴 실제 메모리를 가리킨다.
//그렇기 때문에 const를 경우 실제 오브젝트가 잠기는 것은 아니기 때문에
//object 안의 요소들은 변경이 가능하다.

const ellie = {
    name: 'ellie',
    age: 20,
};
console.log(ellie.age); //20

ellie.age = 21;
console.log(ellie.age); //21