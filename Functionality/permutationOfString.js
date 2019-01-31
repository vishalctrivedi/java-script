var read=require('../utility/utility')
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');
var string=input.question("Enter the string   ");
/**
 * Taking the user input to enter the index.
 */
var res=read.findPermutations(string);//Invoking the findPowerOf2 function.
console.log(res);