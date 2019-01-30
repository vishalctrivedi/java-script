/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :primeNumbers.js
 *@overview      :primeNumbers takes the userinput range to generate the prime numbers in that range
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var start=input.question("Enter the starting number   ");
var end=input.question("Enter the ending number   ");
read.checkPrime(start,end);