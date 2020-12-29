// let persons = ['Song','Park','Kang','Jang'];

// let ulTag=document.createElement('ul');
// document.getElementById('show').append(ulTag);
// persons.forEach(myCallback);


// function myCallback(a,b,c) {
//     console.log(a)
//     let liTag=document.createElement('li');
//     liTag.innerHTML=a;
//     ulTag.append(liTag);

// }

let persons=[];
let person = {
   name: '송혜원',
   age: 20,
   scroe: 100
}

persons.push(person);

let person1={};
person1.name= '박혜영';
person1.age=30;
person1.scroe=80;
persons.push(person1);

let NAME1;
let AGE1;
let SCORE1;

NAME1=person.name;
AGE1=person.age;
SCORE1=person.scroe;

// persons.push('장나라') 이렇게 쓸수도 있지만 string타입으로 들어가게됨

// console.log(persons);


function drawTable() {

    let table = document.createElement('table');
    table.setAttribute('border','1');

    let table1 = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML='NAME';
    table1.append(td1);

    let td2 = document.createElement('td');
    td2.innerHTML='AGE';
    table1.append(td2);

    let td3 = document.createElement('td');
    td3.innerHTML='SCORE';
    table1.append(td3);

    table.append(table1);


    
    // trTag1.append(tdTag1);

    // let tdTag2 = document.createElement('td');
    // let tdTag3 = document.createElement('td');

    document.getElementById('show').append(table);
      
    persons.forEach(function(a,b,c){
     let trTag1 = document.createElement('tr');
     for(field in persons) {
        let tdTag1 = document.createElement('td');
        td1.append(tdTag1);
       let infoName = persons[field].name
       tdTag1.append(infoName);

     }
    });
}

function myCallFunc() {
    
}