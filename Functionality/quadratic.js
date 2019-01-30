/***********************************************************
 *
 * Execution      :Default node    cmd>node Qudractic.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :Qudractic.js
 *@overview      :Qudractic takes the userinput and prints the roots of the equations.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');
var a=input.question("Enter the value of a ");
/**
 * Taking the user input to enter value of a.
 */
var b=input.question("Enter the value of b ");
/**
 * Taking the user input to enter value of b.
 */
var c=input.question("Enter the value of c ");
/**
 * Taking the user input to enter value of c.
 */
read.calculateEquation(a,b,c);//Invoking the equation function.
