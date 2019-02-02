/************************************************************************
 * Execution :   default node : cmd> node orderedList.js
 *              
 * Purpose   :   To read from file the list of Numbers and take user input for a new number.
 * 
 * @description
 * @file     :   orderedList.js
 * @overview :   Read a List of Numbers from a file and arrange it ascending Order in a Linked List.
 *               Take user input for a number, if found then pop the number out of the list else insert
 *               the number in appropriate position.
 * @author   :   Vishal C  <iamvishal96@gmail.com>
 * @version  :   1.0
 * @since    :   31/01/2019

 **************************************************************************/
var read=require('../utility/utility');
var read1=require('../utility/utilityDataStructures');
var input=require('readline-sync');

var arr=read.fileRead('vishal.txt');
read.mergeSort(arr);
console.log(arr);

var linkedlist= new read1.LinkedList();

for(let i=0;i<arr.length;i++)
{
    linkedlist.add(arr[i]);
}

console.log("data in list: "+linkedlist.print());
var valid=false;

do
 {
  var number=input.question("enter the number: ");
    if(isNaN(number))
     {
       console.log("not a valid entry,enter only numbers")
     }
    else
     {
    valid=true;
     }
}
while(!valid);

var result=linkedlist.search(number);
console.log("number in the list: "+result);

if(result === true)
{
    console.log(linkedlist.remove(number));

    var output=linkedlist.print();
    read.fileWrite('vishal.txt',output)
    console.log("removed the number");
    console.log("new data: "+output);
}
else
{
    var position=linkedlist.addpos(arr,number);
    linkedlist.insertAt(number,position);
    var output1=linkedlist.print();

    read.fileWrite('vishal.txt',output1);
    console.log("word added successfully");
    console.log("new data"+ output1);
}

