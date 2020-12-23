//사용자가 입력한 값을 읽어온다

let grade = window.prompt('숫자을 입력하세요');
// let name1 = window.prompt('숫자을 입력하세요');
// let name2 = window.prompt('숫자을 입력하세요'); 
// let name2 = document.getElementById('name') .value;
// console.log('입력한 이름은: '+ name1);

diffSum(name1,name2); //입력받은 두수 사이의 합 ex>15~25이면 15~24까지의 숫자의 합

// function diffSum(name1,name2) {
//     let n1 = parseInt(name1);
//     let n2 = parseInt(name2);
//     let sum=0;
//     for(let i=n1; i<n2; i++){
//         sum +=i;
//     }
//     document.write(sum)
// }


checkGrade(grade); //100:A, 90이상:B 80이상:C, 그외 D

function checkGrade(grade) {
    if(grade<=80){
        document.write('C');
    }else if(grade<=90){
        document.write('B');
    }else if(grade=100){
        document.write('A'); 
    }else{
        document.write('D')
    }
}



// sum(name1,name2);

function sum(a,b) {
    let n1 = parseInt(a); //문자열('30')에 들어있는 숫자를 실제 숫자타입으로 바꿔주는것
    let n2 = parseInt(b);
    console.log(n1+n2);
}
