// let something; --> 정의되지 않은(undefined) 상태
let something;
something=1<2;

if(something) {
    console.log("참입니다.")
}else{
    console.log("거짓입니다.")
}

//object>something/field>name,age,phone --->자바스크립트에서는 콜론으로 구분
something = {
    name: 'SONG',
    age:20,
    phone: '010-1111-1111'
}
//field in something하면 something이라는 field의 값을 하나씩 가져옴
// for (field in something) {
//     console.log(field);
// }

//field와 값을 하나씩 가져옴 something.field를 하면 something이라는 필드의 필드 값을 가져오겠다는 뜻이라 쓰면안됨
let name = something.name;
let age = something['age'];

for (field in something) {
    console.log(field,something[field]);
}

let nameAry =['Hong','Park','Kim'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Song';

for(let i=0; i<nameAry.length; i++) {
    console.log('nameAry['+i+']=>'+nameAry[i])
}
//배열의 요소를 가져올때는 of를 쓴다.
// document.write('<ul>');
// for(str of nameAry) {
//     document.write('<li>'+str+'</li>');
// }
// document.write('</ul>');

//테이블
 document.write('<table border="1">');
 document.write('<tr><th>순번</th><th>이름</th></tr>')
 let i=1;
 for(str of nameAry) {
    document.write('<tr><td>'+(i++)+'</td>');
    document.write('<td>'+str+'</td></tr>');
 }
  document.write('</table>');
