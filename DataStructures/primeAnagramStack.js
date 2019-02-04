var access = require('../utility/utilityDataStructures');
var M = require('../utility/utility')
var readline = require('readline-sync');
var arr = [];
var stack = new access.Stack
for (let i = 1000; i >= 0; i--) 
{
    if (M.isPrime(i))
        arr.push(i)
}
/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i + 1; j < arr.length; j++) 
    {
        if (M.isAnagram(arr[i], arr[j])) 
        {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.print()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");