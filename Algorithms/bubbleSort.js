
/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :bubbleSort.js
 *@overview      :bubbleSort takes the array size user input and sort the integers using bubble sort method.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var size=input.question("Enter the size of the array  ");
var res=read.sortBubble(size,input);
console.log(res);