/***********************************************************
 *
 * Execution      :Default node    cmd>node FlipCoin.js
 * Purpose        :To find the percentage of coins fliped heads and tails.
 * 
 *@description 
 * 
 *
 *@file          :FlipCoin.js
 *@overview      :Calculates the number of times the count of heads and tails,calculate the percentage..    
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
var number=input.question("Enter the number of times to flip a coin  ");
/**
 * Taking the user input to enter number of times to flip a coin.
 */
read.flipCoin(number);//Invoking the coinflip function.