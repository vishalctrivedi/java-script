var utilDS = require('../utility/utilityDataStructures');
var utility = require('../utility/utility')
var arr=[];
var Q=new utilDS.Queue;
for (let i =0; i<1000; i++) 
{
    if (utility.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i + 1; j < arr.length; j++) 
    {
        if (utility.isAnagram(arr[i], arr[j])) 
        {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
  console.log(" Anagrams are :"+Q.printList());