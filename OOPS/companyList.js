var utilityDS=require('../utility/utilityDataStructures')
var read = require('readline-sync')
var file=require('fs')
var data=file.readFileSync('company.json','utf8')
var object=JSON.parse(data)
var l=new utilityDS.LinkedList
var a=object.company
var c=0
for(let i in a)
{
    l.add(object.company[i])
    c++
}
console.log(l.printele())
var name=read.question("Enter the name of company you want to remove :")
var temp=l.head
console.log(l.size)
for(let i=0;i<c;i++)
{
    if(temp.data.name==name)
    {
    l.remove(temp.data)
}
else
{
    temp=temp.next;
}
}

console.log(l.printele());