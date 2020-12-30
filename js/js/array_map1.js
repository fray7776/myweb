let students = [];

let student= {
    sNo:1,
    sName:'Song',
    sGen:'Female',
    sScore:80
}

for(let i=1; i<=5; i++) {
    let std ={};
    std.sNo= i;
    std.sName='Song'+i;
    std.sGen=i % 2 ==0 ? 'M' : 'F';
    std.sScore=80+i;
    students.push(std);
}

let fe1=students.filter(function(a,b,c) {
    return a.sGen== 'F';
}).map(function(a,b,c){
    return a.sScore;   
    
});
console.log(fe1);
