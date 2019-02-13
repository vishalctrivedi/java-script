/************************************************************
 * Execution    :   1. cmd> node stockAccountStack.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon stockAccountStack.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To add and remove the company info from the list of company shares.
 * 
 * @description :   List of CompanyShares in a Linked List and new CompanyShares can
 *                  be added or removed easily.
 *                  
 * @file        :   stockAccountStack.js
 * @overview    :   To add and remove the company info from the list of company shares.
 * @author      :   Vishal C <iamvishal96@gmail.com>
 * @version     :   1.0
 * @since       :   12/02/2019
 * 
 * **********************************************************/
var file = require("fs");
var read = require("readline-sync");
var utiltiy = require("../OOPS/stockInStackUtil");
function main() {
  try {
    var com = new utiltiy.companySharesStack
    /**
     * Loop the company array objects and add it to stack.
     */
    outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save and exit");
      var num = read.questionInt("Enter valid choice :");
      /**
       * Switch to choose the case to add,remove and
       * print
       */
      switch (num) {
        case 1:
          com.addToStack();
          break;
        case 2:
          com.removeFromStack();
          break;
        case 3:
          com.print();
          break;
        case 4:
          com.writeStock();
          break outer;
        default:
          console.log("Please enter valid number ");
          break;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
main();