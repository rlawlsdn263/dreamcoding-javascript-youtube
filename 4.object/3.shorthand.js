//Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};

const person4 = makePerson('ellie', 30);
console.log(person4); //{name: 'ellie', age: 30}

function makePerson(name, age) {
    return {
        //property value shorthand
        //key와 value가 동일하면 생략 가능
        name,
        age,
    };
}
