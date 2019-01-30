var read=require('../utility/utility');
var input=require('readline-sync');
var word=input.question("Enter the word to be searched  ");
var file=require('fs');
var arr=[];
file.readFile('test.txt',(err,data)=>
{
    if(err)
    throw err;
    arr=data.toString().split(" ");
    console.log(arr);
    
    console.log(read.binarySearch(arr,word));   
})
