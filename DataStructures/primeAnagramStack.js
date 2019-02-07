var utilDS = require('../utility/utilityDataStructures');
var utility = require('../utility/utility')
var arr = [];
var stack = new utilDS.Stack
for (let i = 1000; i >= 0; i--) 
{
    if (utility.isPrime(i))
        arr.push(i)
}
/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i + 1; j < arr.length; j++) 
    {
        if (utility.isAnagram(arr[i], arr[j])) 
        {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.print()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");