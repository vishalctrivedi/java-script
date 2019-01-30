var read=require('../utility/utility');
var input=require('readline-sync');

var arr=[];
var size=input.question("enter the size= ");

for(let i=0;i<size;i++)
{
  arr.push(input.questionInt("enter the elements= "));  
}
console.log("before sorting= ");
console.log(arr);

var result=read.mergeSort(arr);
console.log("after sorting= ");
console.log(result);