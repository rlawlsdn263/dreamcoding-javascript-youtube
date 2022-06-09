// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie); // {name: 'coder'};

//object는 reference로 전달되기 때문에
//function 안에서 object의 값을 변경하면
//변경된 값이 그대로 메모리에 적용된다 