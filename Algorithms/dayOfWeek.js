/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :dayOfWeek.js
 *@overview      :dayOfWeek takes the  command line arguments inputs from the user and finds out day of the week using formula.
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var read=require('../utility/utility');
var input=require('readline-sync');
var day=Number(process.argv[2]);
var month=Number(process.argv[3]);
var year=Number(process.argv[4]);
var res=read.findDay(day,month,year);
console.log(res);