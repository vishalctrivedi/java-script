/***********************************************************
 *
 * Execution      :Default node    cmd>node Harmonic.js
 * Purpose        :To print harmonic number value.
 * 
 *@description 
 * 
 *
 *@file          :HarmonicNumber.js
 *@overview      :HarmonicNumber takes the userinput and prints the Nth harmonic value.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');
var number=input.question("Enter the number  ");
/**
 * Taking the user input to enter number.
 */
read.findHarmonicNumber(number);//Invoking the numberHarmonic function.