// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890

//2000년 이전, 이후 구분 > 1,3이면 남자
//2000년 이전, 이후 구분 > 2,4이면 여자



function getGender(num) {
    let nums = num.substring(7, 8);
    let nums1 = num.slice(-6, -7);

    console.log(nums);
    let nums2= numbers.trim(6,7).slice(-6,-7);

    if (nums1 == 1) {
        return '남자';
    } else if (nums1 == 2) {
        
        return '여자';
    } else if (nums1 == 3) {
        
        return '남자';
    } else if (nums1 == 4) {
        return '여자';




    }
}

let numbers = '990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let result;
let numAry = numbers.split(' ');
for (num of numAry) {
    let result = getGender(num);
    console.log('결과: ' + result);
}

