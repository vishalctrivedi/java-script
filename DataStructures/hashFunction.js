var access = require('../utility/utilityDataStructures');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../utility/utility');

function hashing() 
{
   
    var fileRead = filestream.readFileSync('hashFunction.txt', 'utf8');
    var numArray = fileRead.split(' ');
    var arr = []
    
    for (let i = 0; i < numArray.length; i++) 
    {
        var n = Number(numArray[i]);
       var remainder = n % 10;
        
        if (arr[remainder] === undefined) 
        {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } 
        else 
        {
            arr[remainder].add(n);
        }
    }
    
    var str = "";
    for (let index = 0; index < 10; index++) 
    {
        take.print(index + " slot: ");
        try 
        {
            console.log(arr[index].printList());
        } catch (err) 
        {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;
   
    do {
        var number = readline.question('Enter the number you want to search \n');
      if (isNaN(number) && number<0) 
      {
        console.log("Enter positive number only greater than zero");
      } else 
      {
        valid = true;
      }
    } 
    while (!valid);
        remainder = Number(number % 10);
        console.log("Remainder is "+remainder);
        
        if (arr[remainder] === undefined) 
        {
            arr[remainder] = new access.LinkedList;
        }
        if (arr[remainder].contains(Number(number))) 
        {
            console.log("The number is present in the file");
            arr[remainder].removeItem(number);

        } 
        else 
        {
            console.log("Number is not in the file");
            arr[remainder].add(number);
        }
        var flag;
        
        for (let index = 0; index < 10; index++) 
        {
            flag = true;
            take.print(index + " result slot: ");
            try 
            {
                console.log(arr[index].printList());
                str = str + arr[index].printList();
            } catch (err) 
            {
                console.log("Empty index");
            }
        } 
        console.log(str);
        utility.fileWrite('hashFunction.txt', str);

        console.log("\n\n");
    }
hashing();