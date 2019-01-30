/***********************************************************
 *
 * Execution      :Default node    cmd>node stringReplace.js
 * Purpose        :Replace String Template "Hello <<UserName>>, How are you?"with proper username
 * 
 *@description 
 * 
 *
 *@file          :StringReplace.js
 *@overview      :StringReplace takes the userinput and print it with some sentence.    
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@purpose       :stringReplace
 *@since         :24/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility');
/**
 * For accessing data from utility file.
 */
var name=require("readline-sync");
var username=name.question("enter the name  ");
/**
 * Taking the user input to enter the name.
 */
read.stringreplace(username);//Invoking the stringreplace function.










































































































































