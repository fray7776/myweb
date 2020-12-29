function drawTable() {
    let h2=document.createElement('h2');
    h2.innerHTML="입력 양식 데이터 전송 버튼"
    show.append(h2);

    
    // let p = document.createElement('p');
    // p.innerHTML="이름: "
    let form = document.createElement('form');
    form.innerHTML='이름: '
    
    let input = document.createElement('input');
    input.setAttribute('type','text');
    form.append(input);
    
    // let br=document.createElement('br');
    // form.append(br);

    let form1 = document.createElement('form');
    form1.innerHTML='학과: '
    let input1 = document.createElement('input');
    input1.setAttribute('type','text');
    form1.append(input1);
    
    let br=document.createElement('br');
    let br1=document.createElement('br')
    form1.append(br);
    form1.append(br1);


    let input2 = document.createElement('input');
    input2.setAttribute('type','submit');
    input2.setAttribute('value','전송');
    form1.append(input2);



    show.append(form);
    show.append(form1);

}