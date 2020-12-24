let friends = [];
//let i=0을 function 밖에 정의하면 for문 돌때마다 저장하는 역할을 한다.
let i=0;

function input_friend() {
  let namea = document.getElementById('name').value;  
  let agea = document.getElementById('age').value;
  let hobbya = document.getElementById('hobby').value;

  let friend = {};
  friend.name = namea;
  friend.age = agea;
  friend.hobby = hobbya;
  
  
  friends[i++] = friend;
  console.clear();

  let new1=document.getElementById('friends');

  for(a of friends) {
    document.write('<tr>')
      for(field in a) {
          document.getElementById('friends').innerHTML = namea.value
          console.log(friend[a]);
      }
  }
//   console.log(name.value,age.value,hobby.value);

//   document.getElementById('show').innerHTML = name.value+','+age.value+','+hobby.value;
//   document.getElementById('result').value = name.value+','+age.value+','+hobby.value;
}