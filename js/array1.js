
let fruits = ['Apple','Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Kiwi';
fruits[fruits.length] = 'Watermelon';
fruits[3] = 'Orange'
delete fruits[2];
// for(let i =0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }



fruits = [];
fruits.push('Apple');
fruits.push('Avocado'); // 젤 뒤에서부터 추가 = push
fruits.unshift('Strawberry') // 젤 앞에서부터 추가 = unshift

// fruits.pop();  //뒤에 있는 요소부터 빼는것 = pop
// fruits.shift(); //앞에 있는 요소부터 뺀는것 = shift

let fruit = fruits.splice(1,2,'Candy','chocolate','tea'); //splice(start,지우고싶은 갯수,'새로넣고싶은 요소') 
                                                          //-->undifined없이 지울수 있다.
                                //지운것을 배열로 만든다. 또,추가도 할 수 있다. 지우고싶은 갯수에 0을 넣으면 추가만됨
console.log(fruit);

for(fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple','Strawberry','Blueberry'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}
fruit['name']; // object의 field를 가져옴 -> name을 가져옴
furits[0]; //배열기반으로 요소 가져옴 ->apple 가져옴
