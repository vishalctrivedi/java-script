var read=require('../utility/utility');
var input=require('readline-sync');
var num=input.question("Enter the integer to be converted   ");
var res1=read.convertBinary(num);
console.log(res1);