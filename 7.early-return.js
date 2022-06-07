//7. early return, early exit 

//bad
//블럭 안에서 코드를 많이 작성하면 가독성이 떨어진다
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic...
    }
}

//good
//조건이 맞지않으면 return을 사용해 빠르게 종료시킬 수 있다
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}