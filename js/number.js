let x = -10.45; 
let y = '20.45'; //

let result = x*y; //문자를 숫자로 바꾸어 연산하기 위해 parseInt라 써야됨
// result = x / 0;
console.log(result);

function sum() {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let total = document.getElementById(parseInt(num1)+parseInt(num2));

}

