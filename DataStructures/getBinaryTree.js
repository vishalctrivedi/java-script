var utilds=require('../utility/utilityDataStructures');
//var utility=require('../utility/utility');
var read=require('readline-sync');
var number=read.questionFloat("enter the number :");
var factorial=utilds.getBinaryTree(number);
var factorial1=utilds.getBinaryTree(number*2);
var factorial2=utilds.getBinaryTree(number+1);
var result=(factorial1)/(factorial2*factorial);
console.log(result);