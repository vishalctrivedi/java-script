var read=require('../utility/utility');
var read1=require('../utility/utilityDataStructures');
var input=require('readline-sync');
var word=input.question("enter word to be searched in file:")


var arr=read.fileRead('vishal.txt');
var l=new read1.LinkedList();
for(let i=0;i<arr.length;i++)
{
   l.add(arr[i])
}


var found=l.search(word);
if(found==true)
{
    l.remove(word);
    var output=l.print();
    read.fileWrite('vishal.txt',output);
    console.log(output)
}
else
{
    l.add(word)
    var output=l.print();
    read.fileWrite('vishal.txt',output);
    console.log(output)
}
