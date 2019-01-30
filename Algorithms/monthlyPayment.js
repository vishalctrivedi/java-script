/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :monthlyPayment.js
 *@overview      :monthlyPayment takes the user input command  Principal,rate,Years to calculate the monthly payment using formula.
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var principal=process.argv[2];
var year=process.argv[3];
var rate=process.argv[4];
var res=read.calculatePayment(principal,year,rate);
console.log(res);