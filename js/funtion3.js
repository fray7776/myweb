let name1 = window.prompt('숫자을 입력하세요');
checkMax(name1);
function checkMax(name1) {

    let numsAry = [];

    for (let i = 0; i < 5; i++) {
        let name1 = window.prompt('숫자을 입력하세요');
        numsAry[i] = parseInt(name1);
    }
    console.log(numsAry);
    let Max = 0;
    for (num of numsAry) {
        if (num > Max) {
            Max = num;
        }
    }
    console.log(Max);
}
