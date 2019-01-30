/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :palindrome.js
 *@overview      :palindrome takes a number from the user and then checcks whether 
                  the given number is palindrome or not
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var number=input.question("Enter the number  ");
var res=read.checkPalindrome(number);
console.log(res);