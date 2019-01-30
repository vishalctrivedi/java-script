/***********************************************************
 *
 * Execution      :Default node    cmd>node creatArray.js
 * Purpose        :To display the array elements in the array.
 *@description 
 * 
 *
 *@file          :Array2d.js
 *@overview      :Array2d takes the userinput and display the elements in array.    
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
var rows=input.question("Enter the number of rows   ");
/**
 * Taking the user input to enter number of rows.
 */
var columns=input.question("Enter the number of columns   ");
/**
 * Taking the user input to enter number of columns.
 */
read.createArray(rows,columns,input);//Invoking the creatArray function.