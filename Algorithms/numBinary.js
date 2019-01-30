var read=require('../utility/utility');
var input=require('readline-sync');
var num=input.question("Enter the number  ");
var res=read.toBinary(num);
console.log(res);