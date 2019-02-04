var access=require('../utility/utilityDataStructures');
//var input=require('../utility/utility');
var read=require('readline-sync');
var number=read.questionFloat("enter the number :");
var factorial=access.getBinaryTree(number);
var factorial1=access.getBinaryTree(number*2);
var factorial2=access.getBinaryTree(number+1);
var result=(factorial1)/(factorial2*factorial);
console.log(result);