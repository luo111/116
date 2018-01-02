"use strict";
let readlineSync = require('cli-interact');
let AddStudent = require("../lib/AddStudent");
let PrintStudent = require("../lib/PrintStudent");
let CountSum = require("../lib/CountSum");

var student = [];
let one = [];
var result;
function main(){
    let choose;
    do{
        choose =readlineSync.question("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：\n");
        if(choose==="1") {
            result = AddStudent();
            if (result instanceof Array) {
                save();
            }
        }
         else if(choose==="2"){
            let i =0;
            let j = 0;
            let studentNumber = PrintStudent(student);
            if(studentNumber instanceof Array){
                console.info("\n\n成绩单\n" +"姓名|语文|数学|英语|编程|平均分|总分 ");
                while(i<studentNumber.length){
                    j = 0;
                    while(true){
                        if(j===student.length)
                            break;
                        if(studentNumber[i]===student[j].ID){
                            let sum = CountSum(student[j]);
                            let ave = sum / 4;
                            console.info(student[j].name + "  |" + student[j].chinese + "  |" + student[j].math + "  |" + student[j].english + "  |" + student[j].code + "  |" + ave + "    |" + sum);
                            break;
                        }
                        j++;
                    }
                    i++;
                }
            }
        }  
       
    }while(choose!=="3");
}

function saveStudent(){
        let oneStudent = {};
        oneStudent.name = result[0];
        oneStudent.ID = result[1];
        oneStudent.classNumber = result[2];
        let i = 3;
        while (i < 7) {

            one = result[i].split(":");
            if (one[0] == "chinese") {
                oneStudent.chinese = one[1];
            }
            else if (one[0] == "math") {
                oneStudent.math = one[1];
            }
            else if (one[0] == "english") {
                oneStudent.english = one[1];
            }
            else if (one[0] == "code") {
                oneStudent.code = one[1];
            }
            i++;
        }
        student.push(oneStudent);
        console.log(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)
        console.info("学生" + oneStudent.name + "的成绩被添加");
    } 

module.exports = main;