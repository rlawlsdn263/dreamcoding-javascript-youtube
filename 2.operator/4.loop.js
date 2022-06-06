// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 코드블럭을 조건이 맞으면 실행하고 싶다면 while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
};

// do while loop, body code is executed first,
// then check the condition
// 코드블럭을 조건 상관없이 우선 실행하고 싶다면 do while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
//begin은 한 번만 실행되고
//condition이 맞다면 
//step이 실행되고 다시 condition으로 돌아온다
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

//inline variable declaration
//코드블럭 안에 지역변수를 설정하는 것
for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline vairable for: ${i}`);
}

//nested loops
//i가 0일 때 j를 0~9까지 반복하고
//i가 1일 때 j를 0~9까지 반복하고
//i가 10이 될때까지 반복한다

//cpu에 좋지않아 nesting 반복문은 피하는 게 좋다
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}