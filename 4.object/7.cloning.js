//Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: 20};

//user2는 user의 참조값을 받아온다
const user2 = user;
user2.name = 'coder';

//user2를 변경하자 user도 변경됐다
console.log(user); //{ name: 'coder', age: 20 }

//old way
const user3 = {};
for (key in user) {
    //user3의 key는 user의 key가 될 거야
    user3[key] = user[key];
}
console.log(user3); //{ name: 'coder', age: 20 }


//Object.assign
const user4 = {};
Object.assign(user4, user);

const user5 = Object.assign({}, user);
console.log(user4); //{ name: 'coder', age: 20 }
console.log(user5); //{ name: 'coder', age: 20 }

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};

//뒤에 나온 아이일수록 값을 덮어씌운다
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); //blue
console.log(mixed.size); //big