/***********************************************************
 *
 * Execution      :Default node    cmd>node leapYear.js
 * Purpose        :To find the leap yaer
 * 
 *@description 
 * 
 *
 *@file          :leapYear.js
 *@overview      :leapYear takes the userinput and print weather it is leap year or not..    
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
var year=input.question("Enter the year  ");
/**
 * Taking the user input to enter the year.
 */
read.findLeapYear(year);//Invoking the yearLeap function.