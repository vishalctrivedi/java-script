/***********************************************************
 *
 * Execution      :Default node    cmd>node windChill.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :WindChill.js
 *@overview      :WindChill takes the userinput commands and computes the wind chill .    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility')
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');
var temp=input.question("Enter the temperature  ");
/**
 * Taking the user input to enter the temperature.
 */
var velocity=input.question("Enter the velcity of the wind  ");
/**
 * Taking the user input to enter the velocity.
 */
read.calculateWindChill(temp,velocity,input);//Invoking the calculateWindChill function.