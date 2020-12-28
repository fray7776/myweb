let ulTag=document.createElement('ul');
ulTag.innerHTML = 'Mango'
ulTag.id='a';

let liTag=document.createElement('li');
liTag.innerHTML = 'GOOD';
let liTag1=document.createElement('li');
liTag1.innerHTML = 'NOT BAD';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag);
console.log(ulTag);

function input_friend() {
  let fruits=document.getElementById('a').value;
  fruit.append(fruits)
  let liTag2=document.createElement('li');
  liTag2.innerHTML = fruit;
  ulTag.append(liTag2);



//   document.getElementById('a').append(liTag2);
}