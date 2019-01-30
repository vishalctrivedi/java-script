var read=require('../utility/utility');
var input=require('readline-sync');
var n= process.argv[2];
var res=read.FindNumber(0,n-1,input);
console.log("Your number is= "+res);