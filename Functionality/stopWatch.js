/***********************************************************
 *
 * Execution      :Default node    cmd>node stopWatch.js
 * Purpose        :Is to calculate the time elapsed betweem the start and stop.
 * 
 *@description 
 * 
 *
 *@file          :StopWatch.js
 *@overview      :StopWatch takes the userinput measure the elapsed time between start and end.    
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
read.calculateSeconds(input);//Invoking the calculateSeconds function.