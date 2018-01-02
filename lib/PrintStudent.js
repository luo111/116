 "use strict";
function DisplayTwo(){
    let readlineSync = require('cli-interact');
    let information;
    let judge;
    information = readlineSync.question("请输入要打印的学生的学号（格式： 学号,学号,...），按回车提交：\n");
    judge = Judge(information);
    if(judge.message!==true){
        console.log("请按正确的格式输入要打印的学生的学号（格式： 学号,学号,...），按回车提交：\n");
        return {message:flase};
    }
    else{
        return judge.result;
    }
}
function Judge(information) {
    let split = information.split(",");
    let i = 0;
    while(i<split.length){
        if(isNaN(split[i])){
            return {message:false};
        }
        i++;
    }
    return {message:true,result:split};
}

module.exports = DisplayTwo; 