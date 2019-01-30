/***********************************************************
 *
 * Execution      :Default node    cmd>node primeFactors.js
 * Purpose        :To print primeFactors number.
 * 
 *@description 
 * 
 *
 *@file          :PrimeFactors.js
 *@overview      :PrimeFactors takes the userinput and prints the prime factors numbers.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility')
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync')
var number=input.question("Enter the number  ")
/**
 * Taking the user input to enter the number.
 */
read.findPrimeFactors(number)//Invoking the factorPrime function.