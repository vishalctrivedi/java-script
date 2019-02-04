/***********************************************************
 *
 * Execution      :Default node    cmd>node binaryTree.js
 * Purpose        :To print the calender.
 *@description 
 * 
 *
 *@file          :calender.js
 *@overview      :calender that takes the month and year as command-line arguments and prints the Calendar of the month
 *@author name   :Vishal C <iamvishal96@gmail.com>
 *@version       :1.0
 *@since         :02/02/2019
 * 
 ***********************************************************/
var access = require('../utility/calender')
var M = require('../utility/utility');
var T = require('util')
function call() {
    try {
        var month = +process.argv[2];
        var year = +process.argv[3];
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
        var day = access.day(month, 1, year);
        var leap = access.leapYear(year);
       console.log(" month--> "+month+" year--> "+year);
       console.log();
       /**
        * Condition to check leapyear.
        */
        if (leap == true) 
        {
            dates[2] = 29;
        }
        /**
         * Loop till week length and prints week
         */
        for (var i = 0; i < week.length; i++) 
        {
            T.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) 
        {
            T.print(" ");
        }
        for (var i = 1; i <= dates[month]; i++) 
        {
            if (i < 10) 
            {
                T.print(" " + i + "   ");
            }
            if (i > 9) 
            {
                T.print("" + i + "   ")
            }
            if ((i + day) % 7 == 0) 
            {
                console.log();
            }
        }
        console.log("\n\n");
    } catch (err) 
    {
        console.log(err.message);
    }
} 
call();