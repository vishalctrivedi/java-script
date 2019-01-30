/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :Anagram.js
 *@overview      :Anagram takes 2 string   userinput to check that given string is anagram or nots.    
 *@author name   :Vishal <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var s1=input.question("Enter the first string  ");
var s2=input.question("Enter the second string  ");
var res=read.checkAnagram(s1,s2);
console.log(res);