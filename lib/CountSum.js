 "use strict";
function CountSum(student){
    let sum = 0;
    sum +=change(student.chinese);
    sum +=change(student.math);
    sum +=change(student.english);
    sum +=change(student.code);
    return sum;
}

function change(score) {
    let i = 0;
    let j = 0;
    let result = 0;
    while (i < score.length) {
        j = 0;
        while (j != score[i]) {
            j++;
        }
        result = result * 10 + j;
        i++;
    }
    return result;
}
module.exports = CountSum;