var read=require('../utility/utility');
var input=require('readline-sync');
var amount=input.questionInt("Enter the amount  ");
read.calculateNotes(amount);