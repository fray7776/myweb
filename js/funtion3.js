// let name1;
// checkMax(name1);
// function checkMax(name1) {

//     let numsAry = [];

//     for (let i = 0; i < 5; i++) {
//         name1 = window.prompt('숫자을 입력하세요');
//         numsAry[i] = parseInt(name1);
//     }

//     document.write(numsAry);
//     let Max = 0;
//     for (num of numsAry) {
//         if (num > Max) {
//             Max = num;
//         }
//     }
//     console.log("<p>MAX: <b></p>" + Max);
// }
//아래와 같이 {}이거 먼저 쓰고 필드를 만들어도 된다.
// let friend1 = {}
// friend1.name = 'Song';
// friend1.age = 20;

// let friend2 = {
//     name : 'Bark',
//     age : 20
// }

// let friends = [friend1,friend2];
// for(friend of friends) {
//     for(a in friend) {
//         console.log(friend[a]);
//     }

// }
document.write('<table border="1">')
let name1;
let age1;
let friends = [];

    for(let i=0; i<3; i++) {
    name1=window.prompt('이름을 입력하시오');
    age1=window.prompt('나이를 입력하시오');
    let friend={};
    friend.name = name1;
    friend.age = age1;
    friends[i] = friend;

    // let friends;

   

    // friendsAry[0] = (name1);
    // friendsAry[1] = (age1);
    
    // friednsAry1[0][1] = {name1,age1};
    }
   

    document.write('<tr><th>이름'+'</th><th>나이</th>')
    for(list of friendsAry) {
        document.write('<tr>')
        for(field in list) 
            document.write('<td>'+list[field]+'</td>');
        
        document.write('</tr>')
    }
    document.write('</table>')
    
