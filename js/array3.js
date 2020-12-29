let numbers = [34,55,22,10,100,6,7];
//자바는 앞의 숫자를 비교해서 sort하기 때문에 이상하게 정렬됨
numbers.sort(function(a,b) {
    // if(a>b) {
    //     return -1;
    // }else {
    //     return 1;
    // }
    return a-b;

}); 
//if문에서 앞의 값이 양수이면 오름차순, 음수이면 내림차순
//return도 a가 양수이면 오름차순 아니면 내림차순임
// console.log(numbers);
let ulTag=document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum=0;
numbers.forEach(function(item,idx,ary){  //forEach는 매개값을 3개만 받을수 있음
    sum +=item                             //a>배열요소 b>배열번호 c>배열
    console.log(item,idx)
    let liTag=document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);

});

let liTag=document.createElement('li');
    liTag.innerHTML = '합계: ' + sum;
    ulTag.append(liTag);