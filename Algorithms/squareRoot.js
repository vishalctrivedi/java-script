/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :squareRoot.js
 *@overview      :squareRoot takes a number and calculates the squareroot of it.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var number=input.question("Enter the number to find the squareroot  ");
var res=read.findSquareRoot(number);
console.log(res);