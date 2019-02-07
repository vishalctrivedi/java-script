var utilDS=require('../utility/utilityDataStructures');
//var utility=require('../utility/utility');
var input=require('readline-sync');
var number=input.questionFloat("enter the number :");
var factorial=utilDS.getBinaryTree(number);
var factorial1=utilDS.getBinaryTree(number*2);
var factorial2=utilDS.getBinaryTree(number+1);
var result=(factorial1)/(factorial2*factorial);
console.log(result);