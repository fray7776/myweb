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
  let fruit=document.getElementById('a').value;
  let liTag2=document.createElement('li');
  liTag2.innerHTML = fruit;

  document.getElementById('a').append(liTag2);
}