var utilDS = require('../utility/utilityDataStructures');
var input = require('readline-sync');
var util = require('util');
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
            arr[remainder] = new utilDS.LinkedList;
            arr[remainder].add(n);
        } 
        else 
        {
            arr[remainder].add(n);
        }
    }
    
    var str = "";
    for (let index = 0; index < 11; index++) 
    {
        util.print(index + " slot: ");
        try 
        {
            console.log(arr[index].print());
        } catch (err) 
        {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;
   
    do 
    {
        var number = input.question('Enter the number you want to search \n');
      if (isNaN(number) && number<0) 
      {
        console.log("Enter positive number");
      } 
      else 
      {
        valid = true;
      }
    } 
    while (!valid);
        remainder = Number(number % 10);
        console.log("Remainder is "+remainder);
        
        if (arr[remainder] == undefined) 
        {
            arr[remainder] = new utilDS.LinkedList;
        }
        if (arr[remainder].search(Number(number))) 
        {
            console.log("The number is present in the file");
            arr[remainder].remove(number);

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
            util.print(index + " result slot: ");
            try 
            {
                console.log(arr[index].print());
                str = str + arr[index].print();
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