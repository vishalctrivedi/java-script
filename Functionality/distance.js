/***********************************************************
 *
 * Execution      :Default node    cmd>node Distance.js
 * Purpose        : To find the distance from the point(x,y).
 *@description 
 * 
 *
 *@file          :Distance.js
 *@overview      :Distance takes the user input command to calculate the distance between point(x,y).   
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/


var read=require('../utility/utility');
/**
 * For accessing data from utility file.
 */
var x= process.argv[2];
var y=process.argv[3];
/**
 * Taking the inputs from command line.
 */
read.findDistance(x,y);//Invoking the findDistance function.