let friends = [];
//let i=0을 function 밖에 정의하면 for문 돌때마다 저장하는 역할을 한다.
let i=0;

function input_friend() {
  let namea = document.getElementById('name').value;  
  let agea = document.getElementById('age').value;
  let hobbya = document.getElementById('hobby').value;
  let aTr=document.createElement('tr');

  let friend = {};
  friend.name = namea;
  friend.age = agea;
  friend.hobby = hobbya;

 
  document.getElementById(aTr);
  let aTd=document.createElement('td');
  aTd.innerHTML=namea;
  let aTd2=document.createElement('td');
  aTd2.innerHTML=agea;
  let aTd3=document.createElement('td');
  aTd3.innerHTML=hobbya;
 

  aTr.append(aTd);
  aTr.append(aTd2);
  aTr.append(aTd3);
  
  let m =document.getElementById('friends').append(aTr);
console.log(m);
  // for(a of friends) {
  //   document.write('<tr>')
  //     for(field in a) {
  //         document.write('<td>'+a[field]+'</td>')

  //         document.write('</tr>')
        
  //     }document.write('</table>')
  // }
//   console.log(name.value,age.value,hobby.value);

//   document.getElementById('show').innerHTML = name.value+','+age.value+','+hobby.value;
//   document.getElementById('result').value = name.value+','+age.value+','+hobby.value;
}