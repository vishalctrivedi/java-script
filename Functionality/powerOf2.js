/***********************************************************
 *
 * Execution      :Default node    cmd>node powerOf2.js
 * Purpose        : To find the power table of 2.
 *@description 
 * 
 *
 *@file          :PowerOf2.js
 *@overview      :PowerOf2 takes the user input command to print power table of 2.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility')
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');
var power=input.question("Enter the index   ");
/**
 * Taking the user input to enter the index.
 */
var res=read.findPowerOf2(power);//Invoking the findPowerOf2 function.
console.log(res);