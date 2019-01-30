/***********************************************************
 *
 * Execution      :Default node    cmd>node couponNumber.js
 * Purpose        :To generate the coupon number using math.rondom.
 *@description 
 * 
 *
 *@file          :CoupanNumbers.js
 *@overview      :CoupanNumbers takes the userinput to generate the couponNumber which is unique.    
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
var number=input.question("Enter the number of coupans  ");
/**
 * Taking the user input to enter number of coupans.
 */
read.generateCoupanNumber(number);//Invoking the generateCoupanNumber function.