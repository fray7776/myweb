
let person={}; //object
person.name = '송혜원';
person.age = 25;

person = {
    name:'Jang',
    age:26
}
console.log(person);

function Person(name,age) {
    this.name=name;
    this.age=age;
}
person= new Person('Sah',27);
console.log(person);

let persons=[]; //배열

persons.push(person);
persons.push(new Person('Michael','pinut'));

let names=persons.map(function(a,b,c){ //map은 return 타입이 있고 foreach는 리턴타입이 없다.
    let member={};
    member.id= a.name +'-'+b;
    member.age=a.age;
    return member;
});
let over21=persons.filter(function(a,b,c) {
    return a.age> 21;
}).map(function(a,b,c){
    return a.age;    
});

names.forEach(function(a,b,c){
    document.write('<h1>'+a.id+'/'+a.age+'</h1>');
});
// console.log(names);
