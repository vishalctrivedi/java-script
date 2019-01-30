/***********************************************************
 *
 * Execution      :Default node    cmd>node findTriplets.js
 * Purpose        :Prints all triplets in array with 0 sum.
 * 
 *@description 
 * 
 *
 *@file          :Triplets.js
 *@overview      :Triplets takes the userinput find three elements whose sum is equal to zero .    
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
var number=input.question("Enter the number of elements of the array  ");
/**
 * Taking the user input to enter number of elements.
 */
var arr=[];
for(let i=0;i<number;i++)
{
    var element=input.question("Enter the elements   ");
/**
 * Taking the user input to enter the elements.
 */
    arr.push(element);//pushing the elements to the array.
}
read.findTriplets(number,arr);//Invoking the findTriplets function.