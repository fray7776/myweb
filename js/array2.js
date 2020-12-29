
let fruit = [];
fruit.push(add);

function sum() {
    let add=document.getElementById('num1').value;
    console.log(add);
    fruit.push(add);
}

function minus() {
    let mn=document.getElementById('num1').pop();
}