/************************************************************************
 * Execution :   default node : cmd> node palindromeChecker.js
 *              
 * Purpose   :   The solution to this problem will use a deque to store the characters of the string.
 *               We will process the string from left to right and add each character to the rear of the deque. 
 * 
 * @description
 * @file     :   palindromeChecker.js
 * @overview :   A palindrome is a string that reads the same forward and backward, We would like to construct 
 *               an algorithm to input a string of characters and check whether it is a palindrome.

 * @author   :   Vishal C  <iamvishal96@gmail.com>
 * @version  :   1.0
 * @since    :   2/02/2019

 **************************************************************************/
var read = require('../utility/utilityDataStructures');
var read1 = require('../utility/utility');
var input = require('readline-sync');
function check()
{
var d = new read.Dequeue;
var word = input.question("Enter the word :");
var result=d.palindromeChecker(word);
if(result==false)
{
    console.log("String is not a palindrome");
}
else
{
    console.log("String is a palindrome");
}
}
check();