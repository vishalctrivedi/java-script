/***********************************************************
 *
 * Execution      :Default node    cmd>node Gambler.js
 * Purpose        :Print Number of Wins and Percentage of Win and Loss.
 *@description 
 * 
 *
 *@file          :Gambler.js
 *@overview      :Gambler takes the userinputs and keeps track of the number of times he/she wins and the number of bets he/she makes    
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
var stake=input.question("Enter the stake amount   ");
/**
 * Taking the user input to enter stake amount.
 */
var goal=input.question("Enter the goal amount   ");
/**
 * Taking the user input to enter goal amount.
 */
var numberoftimes=input.question("Enter the number of times to gamble   ");
/**
 * Taking the user input to enter number of times to gamble.
 */
read.calculateGambling(stake,goal,numberoftimes);//Invoking the gambling function.