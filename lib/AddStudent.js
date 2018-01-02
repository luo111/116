"use strict";
let readlineSync = require('cli-interact');
function DisplayOne(){
    let information;
    let judge;
    information = readlineSync.question("请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：\n");
    judge = Judge(information);
    while(judge.message!==true) {
        information = readlineSync.question("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）按回车提交：\n");
        judge = Judge(information);
    }
    return judge.result;
}

function Judge(information){
    let result= information.split(",");
    //ly, 10, 10, 语文: 10, 数学: 10, 英语: 10, 编程: 10
    let message = (result.length===7);
    return {message:message,result:result};
}

module.exports = DisplayOne;