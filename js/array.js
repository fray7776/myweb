let friend1= {
    name:'송혜원',
    age: 20,
    hobby: '그림그리기'
}
let friend2= {
    name:'이태곤',
    age: 32,
    hobby: '게임'
}
let friend3= {
    name:'김선웅',
    age: 28,
    hobby: '독일어'
}
let friends =[friend1, friend2,friend3];
document.write('<table border="1">')
// document.write('<tr><th>'+"이름"+'</th><th>'+"나이"+'</th><th>'+"취미"+'</th>')

for(field of friends) {
    document.write('<tr>')
    for(a in field)
        document.write('<td>'+field[a]+'</td>')
    }
document.write('</table>')





let numbers = [3,4,8,5,111];
let sum=0;

for(num of numbers) {
    if(sum<num){
        sum=num;
        console.log(sum)
    }
    
}
console.log("가장 큰수: "+sum)