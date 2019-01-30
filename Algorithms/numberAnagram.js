/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :numberAnagram.js
 *@overview      :numberAnagram takes 2 numbers   userinput to check that given string is anagram or nots.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var n1=input.question("Enter the first number  ");
var n2=input.question("Enter the second number  ");
var res=read.findStringAnagram(n1,n2);
console.log(res);