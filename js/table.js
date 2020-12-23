//타이틀영역
// var tableTag = document.getElementById('tbl');

// var trTag1 = document.createElement('tr'); //<tr></tr>
// var trTag3 = document.createElement('tr');
// var tdTag1 = document.createElement('td'); //<td></td>
// var tdTag4 = document.createElement('td');

// tdTag1.innerHTML='Name';
// tdTag4.innerHTML='Song';
// tdTag1.setAttribute('id','first');
// tdTag1.setAttribute('class','tilte');
// tdTag1.setAttribute('class','data');
// var tdTag2= document.createElement('td');
// tdTag2.innerHTML='Age';
// tdTag2.setAttribute('class','tilte');
// tdTag2.setAttribute('class','data');

// trTag1.append(tdTag1);
// trTag1.append(tdTag2);
// trTag3.append(tdTag4);

// console.log(trTag1);

// tableTag.append(trTag1);
// tableTag.append(trTag3);

var tableTag= document.getElementById('tbl');

var trTag1= document.createElement('tr');
var trTag2= document.createElement('tr');
var tdTag1= document.createElement('td');
trTag1.setAttribute('class','title');

var tdTag2= document.createElement('td');
var tdTag3= document.createElement('td');
var tdTag4= document.createElement('td');
trTag2.setAttribute('class','data');


tdTag1.innerHTML='Name'
tdTag2.innerHTML='Age'
tdTag3.innerHTML='Song'
tdTag4.innerHTML='29'
trTag1.append(tdTag1)
trTag1.append(tdTag2)
trTag2.append(tdTag3)
trTag2.append(tdTag4)

console.log(trTag1)

tableTag.append(trTag1)
tableTag.append(trTag2) 