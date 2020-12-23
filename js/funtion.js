function sum(num1, num2) {
    let result = num1+num2;
    console.log(result);
    return result;
}


// let result = sum('10','20');
// document.write('<h2>'+result+'</h2>')

let myfunc = function(a,b) {
    let result = a*b;
    console.log('HEllo');
    return result;
}
result = myfunc(4,5);

let yourfunc = myfunc;
result = yourfunc(1,2);

console.log(result);

function otherfunc(q,w, funcdef) {
    let result = funcdef(q,w);
    console.log('result: '+result);

}
otherfunc(20,30,myfunc);