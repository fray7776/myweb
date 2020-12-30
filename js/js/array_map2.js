//reduce
let students = [];

for(let i=1; i<=5; i++) {
    let std ={};
    std.sNo= i;
    std.sName='Song'+i;
    std.sGen=i % 2 ==0 ? 'M' : 'F';
    std.sScore=80+i;
    students.push(std);
}

result2 = students.map(function(a){
    return a.sName;
    console.log(a);
}).indexOf('Song3');
console.log(result2);


//some은 하나라도 만족하면 true 리턴
let result1 = students.some(function(a,b,c){
    return a.sScore > 82;
});
console.log(result1);



//every는 다 만족해야 true 리턴, 하나라도 만족못하면 false 리턴
let result = students.every(function(a,b,c){
    return a.sScore > 82;
});
console.log(result);



// let result=students.map(function(a,b,c,d){
//     // console.log(a,b,c);
//     return a.sScore;
// }).reduce(function(a,b,c,d){
//     console.log(a);
//     return a += b;
// })
// console.log('result: ',result);