var utilds = require('../utility/utilityDataStructures');
var M = require('../utility/utility')
var readline = require('readline-sync');
var arr=[];
var Q=new utilds.Queue;
for (let i =0; i<1000; i++) 
{
    if (M.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i + 1; j < arr.length; j++) 
    {
        if (M.isAnagram(arr[i], arr[j])) 
        {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
  console.log(" Anagrams are :"+Q.printList());