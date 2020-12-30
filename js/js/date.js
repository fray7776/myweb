let today = new Date();
// let today=new Date('2020-12-15');
console.log(today.getDay());

function setCal(yyyy, mm, dd) {
    let today= new Date(yyyy+'-'+mm+'-'+dd);
    today= new Date(yyyy,mm,0);
    console.log(today.getDate());
}

setCal('2020','06','05');

function createTable() {

    //요일 만들기
    let day = ['sun', 'mon', 'tue', 'wed', 'tur', 'fri', 'sat'];

    //table 만들기
    let t = document.createElement('table');
    t.setAttribute('border', '1');
    let tr = document.createElement('tr');
    let show1 = document.getElementById('show');

    day.forEach(function (a, b, c) {

        let td = document.createElement('td');
        td.append(a);
        tr.append(td);
        t.append(tr);
        
    });
    show1.append(t);


//날짜 만들기
tr=document.createElement('tr');
for(let i=1; i<=31; i++) {
    let td=document.createElement('td');
    td.append(i);
    if(i%7==1) {
        tr=document.createElement('tr');
    }
    tr.append(td);
    t.append(tr);
}
}
showCal('2020','5');

//현재월의 1일 정보 생성
 function showCal(yyyy,mm) {
    let today = new Date(yyyy+'-'+mm+'-01');
    today = new Date(yyyy,mm,0);
    console.log(today.getDate());
    console.log(today.getDay());


 }


