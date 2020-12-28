let str = 'Please locate where "locate" occurs!'
let strLeng = str.length;

strLeng=str.indexOf('locate');
str.lastIndexOf('locate');

strLeng=str.indexOf('hello');

let fruit = 'Apple, Banana, Kiwi';
let result = fruit.slice(0,5);
console.log(result)

let form = fruit.indexOf('Banana');
// result=fruit.substring(form, form+6);
result = fruit.substr(form,6);
console.log(result);

let newFruit = fruit.replace('Banana','Orange');
console.log(newFruit);


console.log(str.search('locate'));
console.log(str.lastIndexOf('locate'));
console.log('     good     hello    '.trim());
// console.log('5',padEnd(4,  '0'));

let uri = 'http://www.naver.net';
console.log(uri.replace('net','com'));
uri.replace(uri.substring(uri.lastIndexOf('.'),'.com'));

let fruits=fruit.split(',') //split은 값을 배열로 만들어줌
for(f of fruits) {
    console.log(f.trim()); //trim은 공란 없애기
}

