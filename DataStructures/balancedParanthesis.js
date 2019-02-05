/************************************************************************
 * Execution :   default node : cmd> node balancedParentheses.js
 *              
 * Purpose   :   To read in Arithmetic Expression and print True or False to Show
 *               Arithmetic Expression is balanced or not.
 * 
 * @description
 * @file     :   balancedParenthesis.js
 * @overview :   Take an Arithmetic Expression where parentheses are used to order the performance
 *               of operations. Ensure parentheses must appear in a balanced fashion.
 * @author   :   Vishal C  <iamvishal96@gmail.com>
 * @version  :   1.0
 * @since    :   01/02/2019

 **************************************************************************/
var utilds=require('../utility/utilityDataStructures');
//var read1=require('../utility/utility');
var input=require('readline-sync');

 function Stack()
 {
     var St=new utilds.Stack;
     var str=input.question("enter mathematical expression with para");
    var ch,i;

    for(i=0;i<str.length;i++)
    {
        ch=str.charAt(i);
        
        if(ch== '(' || ch == '[' || ch == '{')
        {
            St.push(ch);
        }
        else
        {
            switch(ch)
            {
                case ')' : if(St.pop()!='(')
                {
                    return false;
                }
                break;
                case ']' : if(St.pop()!='[')
                {
                    return false;
                }
                break;
                case '}' : if(St.pop()!='{')
                {
                    return false;
                }
                break;
            }
        }                  
     }
     if(St.size==0)
     {
         return true;
     }
     return false;
 }

 var bol=Stack();
console.log(bol);
 if(bol)
 {
     console.log("String balanced");
 }
 else
 {
     console.log("not balanced");
 }
