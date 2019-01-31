var read=require('../utility/utilityDataStructures');
var l=new read.LinkedList();
l.add("vishal");
l.add("shani");
l.add("bavana");
l.add("aishwarya");
l.print(); 
var res=l.getSize();
console.log(res);