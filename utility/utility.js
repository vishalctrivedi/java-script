/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :utility.js
 *@overview      :All the business logic are coded here.
 *@author_name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/
//const readline=require('readline-sync');
module.exports=
{

        /***** StringReplace *****/
    /*
     * 1. username wit minmum 3 characters and not a number 
     * with userinput
     * 
     *
     *@description : Declaring the function and passing the userinput as argument.
     * 
     * 
     *@purpose : display the username with given inputs
     *
     *@function : It takes the userinput and print it with some sentence.
     */




    fileRead(file)
    {
        var fileStream=require('fs');
        var f=fileStream.readFileSync(file,'utf8');
        var arr=f.split(" ");
        return arr;
    },


    fileWrite(fileName,data)
    {
        const fs=require('fs');
        fs.writeFile(fileName,data,function(err)
        {
            if(err)
            {
                return console.log(err)
            }
        });
    },






    stringreplace(username)
    {
    try
    {
         /**
          * condition to check whether the number is greater than 2
          */
        if(username.length>2)
        {
            var str1="Hello <<username>> how are you";//initializing the string
            var output=str1.replace(/<<username>>/g,username);//use replace regex
            console.log(output);//display the output
        }
        else
        {
            console.log("please enter name more than 3 letters");//display invalid input message
        }
    }
    catch(err)
    {
        console.log(err.message);
    }
    },





    /***********Flipcoin************/
    /***
     * 2.user input to flip the coin number of times.
     * 
     *@description:Declaring the function and passing the user input as argument.
     * 
     *@purpose :Display the percentage of coins fliped heads and tails.
     * 
     * @function:coinflip takes the no of times to flip coin and print the percentage of head and tail
     */

    flipCoin(number)
    {
    try
    {
        var i;
        var n=0;
        var head=0;
        if(number>0)//check if the user given input is a positive number
        {
            /**
             * loop over till the given number and increment head count
             */
            for(i=0;i<=number;i++)
            {
                n=Math.random();//getting a random number
                if(n<0.5)//check if generated number is less than 50 
                head++;
            }
        }
        var headperc=head/number*100;//calcualte percentage of headcount
        console.log("Percentage of Heads is "+headperc);//display heads percentage
        console.log("percentage of Tails is "+(100-headperc));//display tails percentage
    }
    catch(err)
    {
        console.log(err.message);//display error message
    }
    },





    /*************LeapYear****************/
    /**
     * 3.user input to find leap year.
     * 
     * @description:Declaring the function and passing the user input as argument.
     * 
     * @purpose :Print weather the year is leap year or not.
     * 
     * @function:Checks length of the given number, if length equals to 4, then it prints 
     * given number is Leap year or not.
     */

    findLeapYear(year)
    {
    try
    {
        if(year>999 && year<10000)//check if the year is a four digit number
        {
            if((year%400==0) || (year%4==0) || (year%100==0))//condition for checking leap year
            console.log(year+" is a leap year");//display leap year message
            else
            console.log(year+" is not a leap year");//display not a leap year message
        }
        else
        {
            console.log("Enter a four digit number");//display invalid input message
        }
    }
    catch(err)
    {
        console.log(err.message);//display error message
    }
    },




    /*
    * @purpose : to find a user input is leap year or not
    * 
    * @description :declaring function and passing 4 digit number by taking user input
    * @function: check wheather the given input is of 4 digit and check wheather the given year is leap year
    */


   isLeapYear(year) {

       if (year > 999 && year < 10000)  //year should be of 4 digit
       {
           if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))    //since leap year comes for every 4 year
           {
               return true;      //return value
           }
           else
               return false;    //return value 
       }
       else           //if it is not a leap year
       {
           return "year should be of 4 digits"     //return string
       }

},





        /******************PowerOf2*********************/
    /**
     * 4.Command line inputs to find the power
     * 
     * @description: This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
     * 
     * @purpose : To print the power table of 2.
     * 
     * @function:function checks the given number is less then 31, if less then 31, then it prints
          the value of two's power i.e., 2^N value.
     */
    findPowerOf2(power)
    {
    try
    {
        var arr=[];
        var i;
        if(power>0 && power<31)//the power should be lesser than 31 to prevent data overflow
        {                     
            for(i=0;i<=power;i++)//loop over the index till the power
            {
                arr.push(Math.pow(2,i));//calculate the power of 2 and push it to array
            }
        }
        else
        {
            console.log("Enter the number less than 31");//display invalid input message
        }
        return arr;
    }
    catch(err)
    {
        console.log(err);//display error message
    }
    },



    /****************HarmonicNumber****************/
    /**
     * 5. To find the harmonic number.
     * 
     * @description:Prints the Nth harmonic number.
     * 
     * @purpose: Print the Nth Harmonic Value.
     * 
     * @function:function Harmonic takes user input and sum it number of times that user given.
     */
    findHarmonicNumber(number)
    {
    try
    {
        var i=0;
        var res=0;
        if(number>0)//check if the number is positive
        {
            for(i=1;i<=number;i++)//loop over the index till the number
            {
                res=res+(1/i);//calcualte the harmonic number
            }
        }
        console.log(res);//display the harmonic value
    }
    catch(err)
    {
        console.log(err.message);//display error message
    }
    },






    /***************PrimeFactors*****************/
    /*6.Number to find the prime factors
     * 
     *@description:Computes the prime factorization of N using brute force.
     *
     *@purpose:Print the prime factors of number N.
     * 
     *@function:Function harmonicNumber takes user input and adds it to 1/number of times of user input.
     */
    findPrimeFactors(number)
    {
    try
    {
        if(number>0)//check if the number is positive
        for(i=2;i<=number;i++)//loop over the index from 2 till number
        {
            if(number%i==0)//check if the index divides the number perfectly
            {
                while(number%i==0)//loop over till the indexd divides the number perfectly
                {
                    number=number/i;//divide the number by index
                    console.log(i);//display the indexes as prime factors
                }
            }
        }           
    }
    catch(err)
    {
        console.log(err.message);//display error message
    }
    },





    /***************Gambler*************** */
    /**
     * 7.To find the number bets he/she makes
     * 
     * @description: Evaluate a gambler who start with stake and place bets until he/she goes broke.
     *  Keeps track of the number of times he/she wins and the number of bets he/she makes. 
     * 
     * @purpose :To find out the win and loss percentage. 
     * 
     * @function:Function gambler takes the stake ,if math.random >0.5 increment the stake
     * else increment the loss and decrement the stake ,and keep the count number times bets,
     * and prints the number of percentage of win and loss. 
     * 
     */
    calculateGambling(stake,goal,numberoftimes)
    {
    try
    {
        var profit=0;loss=0;count=numberoftimes;//declare the variables
        while(stake!=0 && stake!=goal && count>0)//check if stake amount is positive and goal is not equal to stake
        {
            if(goal>stake)//check if goal is greater than stake
            {
                res=Math.random()//generate a random number
                if(res<0.5)//check if random number is greater than 0.5
                {
                    profit++;//increment profit
                    stake++;//increment stake
                    count--;//decrement the number of gambles
                }
                else
                {
                    loss++;//increment loss
                    stake--;//decrement stake
                    count--;//decrement the number of gambles
                }
            }
        }
        console.log("Number of times won is "+profit);//display the number of wins
        console.log("Profit percentage is "+profit/numberoftimes*100);//display profit percentage
        console.log("Loss percentage is "+(100-(profit/numberoftimes*100)));//display loss percentage
    }
    catch(err)
    {
        console.log(err.message);//display error message
    }
    },




    /*****************CoupanNumbers********************/
    /**
     * 8.N Distinct Coupon Number
     * 
     * @description:Given N distinct Coupon Numbers,need to generate random coupon numbers
     * this code simulates this in  random process.
     * 
     * @purpose :To generate the coupon number using math.rondom
     * 
     * @function:Is to generate random number and to process distinct coupons.
    
     */
    generateCoupanNumber(number)
    {
        var arr=[];//declare an array
        var num=0;
        var randomnum;
        while(num<number)//check if the index is less than  number
        {
            randomnum=Math.round(Math.random()*1234567);//generate a random number
            if(!arr.includes(randomnum))//check if array contains that random number
            {
                arr.push(randomnum);//push that element to the array 
            }
            num++;//increment the index
        }
        console.log(arr);//display the error message
    },




    /******************Array2d*******************/
    /**
     * 9.create 2 dimensional array in memory to read in M rows and N cols 
     * 
     *  @description:Taking the user inputs elements to print 2 Dimensional Array.
     *  
     * @purpose :To dispaly the array elements in 2D array.
     * 
     * @function:M rows, N Cols, and M * N inputs for 2D Array. 
     */
    createArray(rows,columns,input)
    {
        var arr=[];//declare the array
        for(let i=0;i<rows;i++)//loop over the index till the number of rows
        {
            arr.push([])//insert a row
            for(let j=0;j<columns;j++)//loop over the index till the number of columns
            {
                var element=input.question("Enter the array element   ");//take user input from console
                arr[i][j]=element;//insert the element
            }
        }
        console.log(arr);//display error message
    },





    /*****************Triplets******************* */
    /**
     * 10.find three elements whose sum is equal to zero.
     * 
     * @description:A program with cubic running time. Read in N integers and counts the   
     * number of triples that sum to exactly 0.
     * 
     *@purpose : Prints all triplets in array with 0 sum.
     *
     * @function:Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
     */
    findTriplets(number,arr)
    {
        var count=0;//initialize count
        var i,j,k;//declare indexes
        for(i=0;i<number-2;i++)//loop over the index till last third number
        {
            for(j=i+1;j<number-1;j++)//lopp over the index till last second number
            {
                for(k=j+1;k<number;k++)//loop over the index till last number
                {
                    if((Number(arr[i])+Number(arr[j])+Number(arr[k]))==0)//check if the sum of numbers is equal to zero
                    {
                        count++;//increment tyhe count
                        console.log(""+arr[i]+","+arr[j]+","+arr[k]);//display the combination
                    }
                }
            }
        }
        console.log("Number of triplets is "+count);//display the number of triplets
    },





    /*******************Distance*********************/

    /**
     * 11.To find the distance from origin.
     * 
     * @description:To calculate the distance from the point(x,y)
     * 
     * @purpose :To print the distance from origin.
     * 
     * @function:Function factorization accepts user input, loops over it till the input,
    *            if the number is divisible by each number, print the number.
     */
    findDistance(x,y)
    {
        console.log(Math.sqrt(x*x+y*y));//calculate and display the distance
    },




    /*********************StopWatch***********************/
    /**
     * 12.Start the Stopwatch and End the Stopwatch
     * 
     * @description:Measuring the time that elapses between the start and end clicks.
     * 
     * @purpose :Print the elapsed time.
     * 
     *@function: Is to calculate the time elapsed betweem the start and stop.
     *            Press 0 to start. 
     *            Press 1 to stop.    
     */
    calculateSeconds(input)
    {
        var dt1=new Date();
        var startTime=input.question("Press Enter to start the time");
        var start=dt1.getSeconds();
        var stopTime=input.question("Press Enter to stop the time");
        var dt2=new Date();
        var stop=dt2.getSeconds();
        console.log(stop-start+" sec");
    },



    /*******************Quadratic*********************/
    /**
     * 13.To find the roots of the quations.
     *  
     * @description: Take a, b and c as input values to find the roots of x.
     * 
     * @purpose : To find real and imaginery parts of the quation. 
     *  
     * @function:To find the roots of the equation a*x*x + b*x + c.
     */
    calculateEquation(a,b,c)
    {
        var x,y;//declare the variables
        var delta=b*b-(4*a*c);//calculate delta value
        if(delta>0)check //if delta is positive
        {
            x=((-b + Math.sqrt(delta))/(2 * a));//calculate the roots
            y=((-b - Math.sqrt(delta))/(2*a));
            console.log("The roots are "+x+" , "+y);//display the roots
        }
        if(delta==0)//check if delta is equal to zero
        {
            x=-b/(2*a);//calculate the root
            console.log("The roots are "+x);//diaplay the root
        }
        if(delta<0)//check if delta is negative
        {
            x=-b/(2*a);//calculate real part
            y=(Math.sqrt(Math.abs(delta)))/2*a;//calculate imaginary part
            console.log("The roots are "+x+"+i"+y);//display the roots
        } 
    },





    /****************Windchill***************** */
    /**
     * 14.To find Wind chill using temperature and speed.
     * 
     * @description:Takes the user commands inputs and calculate the windchill using temperature and speed.
     * 
     * @purpose:To compute wind chill using formula.
     * 
     * @function:Given the temperature t (in Fahrenheit) and the wind speed v
            (in miles per hour), compute the wind chill.
     */
    calculateWindChill(temp,velocity)
    {
        var result=35.74+0.6215*temp+(0.4275*temp-35.75)*Math.pow(velocity,0.16);//calcualte windchill using the formula
        console.log(result);//display the result
    },






    /**
     * 15.Permutations of a String.
     *
     * @description:Permutation of a String using iterative method and Recursion method.
     * 
     * @purpose:To find all permutation in the given string.
     *  
     * @function:Using iterative method to find all permutation in the string.
     */
    findPermutations(string) 
    {
    try
    {
        var results = [];
        /**
         * if string is a single character add the character to results and return results
         */
        if (string.length === 1)
        {
            results.push(string);
            return results;
        }
            /**
             * for each char in string define innerPermutations as a char of string
             * set innerPermutations to stringPermutations (without next char).
             */
        for (var i = 0; i < string.length; i++) 
        {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = this.findPermutations(charsLeft);
                /**
                 * foreach string in innerPermutations add defined char and innerPermutations char
                 * return results
                 */
            for (var j = 0; j < innerPermutations.length; j++) 
            {
                results.push(firstChar + innerPermutations[j]);
            }
        }
        return results;
    } 
    catch (error)
    {
        console.log("error.message");
    }
    },





    /**************************************************************************************** */








    /*****************************************Algorithms********************************************** */


    /******************Anagram******************** */

    /**
     * 1.Take 2 Strings as Input  and Check for Anagrams
     * 
     * 
     * @description:One string is an anagram of another if the second is simply
     *  a rearrangement of the first.
     * 
     * @purpose:To display the string is anagram are not.
     * 
     * @function:function to check whether two strings are  
     *           anagram of each other.
     */
    checkAnagram(s1,s2)
    {
        var str1;
        var str2;
        var arr1=Array.from(s1);//convert string1 to array
        var arr2=Array.from(s2);//convert string2 to array
        arr1.sort();//sort the array
        arr2.sort();//sort the array
        if(s1.length==s2.length)//check if the length if the two strings are equal
        {
            for(let i=0;i<s1.length;i++)//loop over the index till the length of the string
            {
                str1=""+str1+arr1[i];//cancatinate elements one by one to the string
                str2=""+str2+arr2[i];
            }
            str1=str1.toLowerCase();//convert string to lowercase
            str2=str2.toLowerCase(); 
            if(str1==str2)//check if the two strings are equal
            {
                return true;
            }
        }
        return false;
    },






    /******************binarySearch******************** */

    /**
     * 2.Take an array and a word as an input and check if the word exists in the array
     * 
     * 
     * @description:binarySearch searches the element in an array using mid value looping method
     * 
     * @purpose:To search the element in the given array.
     * 
     * @function:function to check whether the given word exists in the file
     */
    binarySearch(arr,word)
    {
        arr.sort();
        var li=0;
        var hi=arr.length-1;
        var mi=Math.floor((li+hi)/2);
        while(li<=hi)
        {
            if(arr[mi]===word)
            {
                return true;
            }
            else if(arr[mi]<word)
            {
                li=mi+1;
            }
            else
            {
                hi=mi-1;
            }
            mi=Math.floor((li+hi)/2);
        }
        return false;
    },




    /******************vendingMachine******************** */

    /**
     * 3.Take an amount as an input and returns the minimum number of notesw to be given
     * 
     * 
     * @description:vendingMachine calculates the minimum number
        of Notes as well as the Notes to be returned by the Vending Machine as a change
     * 
     * @purpose :to calculate minimum number of notes
     * 
     * @function:function to check for largest value of the Note to return change
        to get to minimum number of Notes.
     */
    calculateNotes(amount)
    {
        var notes=0;
        var arr=[1000,500,100,50,20,10,5,2,1];
        for(let i=0;i<arr.length;i++)
        {
            if(amount/arr[i]>=1)
            {
                var n=Math.floor(amount/arr[i]);
                notes=notes+n;
                console.log(arr[i]+" notes are  :"+n);
                amount=amount%arr[i];
            }
        }
        console.log("Total number of notes are:  "+notes)
    },
    



    /******************findYourNumber******************** */

    /**
     * 4.Takes a number and guesses the number in our mind by asking questions
     * 
     * 
     * @description:takes a command-line argument N, asks you to think of a number
        between 0 and N-1, where N = 2^n, and always guesses the answer with n
        questions.
     * 
     * @purpose :to find the number present in our mind
     * 
     * @function:function to ask questions to the user and guess the number using recursion method
     */
    FindNumber(low, high, input) 
    {
        var mid = Math.floor((low+high)/2);
        var d;
        if (low < high)
        {
            if (low == high - 1)
            {
                d = input.question("Is the number " + low + ",  if yes press--Yes else press no   ");
                if (d == "yes")
                    return low;
                if (d == "no")
                    return high;
            }
            d = input.question("Is the number in the range " + mid + "-" + high + "if yes,press -->yes else press--> no   ");
            if (d == "yes")
                mid = this.FindNumber(mid, high, input);
            if (d == "no")
                mid = this.FindNumber(low, mid - 1, input);
        }
        return mid;
    },




    /******************numBinary******************** */

    /**
     * 5.Takes an integer number and converts it to binary form
     * 
     * 
     * @description:computes the binary representation of n, we consider the powers of 2 less than or
        equal to n in decreasing order to determine which belong in the binary
        decomposition
     * 
     * @purpose :to convert integer to binary numbers
     * 
     * @function:function that outputs the binary (base 2) representation of
        the decimal number typed as the input
     */
    toBinary(num)
    {
        var string="";
        if(num==0)
        return "0";
        while(num>0.9)
        {
            var result=Math.floor(num%2);
            string=result+string;
            num=num/2;
        }
        while(string.length<8)
        {
            string="0"+string;
        }
        return string;
    },





    /******************mergeSort******************** */

    /**
     * 6.Takes the array as an input and sorts it in the ascending order
     * 
     * 
     * @description:​ To Merge Sort an array, we divide it into two halves, sort the two halves
        independently, and then merge the results to sort the full array
     * 
     * @purpose :to sort an array
     * 
     * @function:mergesort divides the array into halves, toMerge merges the divided array into sorted array
     */
    mergeSort(arr)
    {
       if(arr.length<=1)
        {
          return arr;
        }
        
      var mid=Math.floor(arr.length/2);
      var left=arr.slice(0,mid);
      var right=arr.slice(mid);
      var left=this.mergeSort(left);
      var right=this.mergeSort(right);
      return this.toMerge(left,right);
    },
    
    toMerge(left,right)
    {
        var result=[];
        var li=0;
        var ri=0;
        while(li<left.length && ri<right.length)
        {
          if(left[li]>right[ri])
          {
            result.push(right[ri]);
            ri++;
          }
          else
          {
            result.push(left[li]);
            li++;
           }
        }
        while(li<left.length)
        {
          result.push(left[li]);
          li++;
        }
        while(ri<right.length)
        {
            result.push(right[ri]);
            ri++;
        }
    return result;
    },






    /* 7.isAnagramPalindrome
    * *************************
    * @purpose : to find the numbers that are anagram and palindrome.
    * @description : Extend 
    */
   isAnagram(s1, s2) 
   {
    var format = /[a-zA-Z0-9]/;
    var result;
    if (format.test(s1) && format.test(s2))
     {
        if (s1.length !== s2.length) 
        {
           result = false;
        }
        

        var sorts1 = s1.toString().split("").sort().join("");
        var sorts2 = s2.toString().split("").sort().join("");
        
        result = sorts1 === sorts2;
      

        if (result == true) 
        {
            //console.log("is anagram");
            return true;
        }
        else 
        {
           // console.log("not anagram");
            return false;

        }
    }
    else 
    {
        console.log("enter only letters or alphabets");
    }
},




    isNumberPalindrome(num1) 
    {
        var str = "";
        num1 = num1 + "";
        for (let i = 0; i < num1.length; i++) 
        {
            str = num1.charAt(i) + str;
        }
        if (str == num1) 
        {
            return true;
        }
        return false;
    },

    isPrime(num) 
    {
        if (num == 0 || num == 1)
            return false;
        for (let i = 2; i < num; i++) 
        {
            if (num % i == 0)
                return false;
        }
        return true;
    },


    isAnagramPalindrome() 
    {
        console.log("Prime numbers in the range of 0 to 1000 which are anagram");
        {
            var arr = [];
            for (let i = 0; i < 1000; i++) 
            {
                if (this.isPrime(i)) 
                {
                    arr.push(i);
                }
            }
            for (let i = 0; i < arr.length; i++) 
            {
                for (let j = i + 1; j < arr.length; j++) 
                {
                    if (this.checkAnagram(arr[i], arr[j])) 
                    {
                        console.log(arr[i] + " and " + arr[j] + " are anagram");
                        if (this.isNumberPalindrome(arr[i])) 
                        {
                            console.log(arr[i] + " is palindrome ");
                        }
                        if (this.isNumberPalindrome(arr[j])) 
                        {
                            console.log(arr[j] + " is palindrome ");
                        }
                    }
                }
            }
        }
    },







    binToDecimal(num)
    {
        var sum=0;
        var j=0;
        for(let i=num.length-1;i>=0;i--)
        {
            sum=sum+(num.charAt(i)*Math.pow(2,j));
            j++;
        }
        console.log(sum);
    },




    convertBinary(num)
    {
        var string=this.toBinary(num);
        string1=string.substring(0,4);
        string2=string.substring(4,string.length);
        var swap=string2+string1;
        this.binToDecimal(swap);
        return swap;
    },






    /*
        *@purpose : to find day falls on the given user input date format
        *@param   : day-take date from command line of user choice 
        *           month-take month from command line of user choice
        *           year- take year from command line of user choice
        *@description : use formula and calculate the day 
        */
       findDay(day, month, year) {

        var y0 = year - Math.floor((14 - month) / 12);

        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));

        var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;

        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0);
        return d0;


},
    
}
