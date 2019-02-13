var file = require("fs");
var readline = require("readline-sync");
var utility = require("../OOPS/companyLinkedListUtil");
function main() {
  try {
    /**
     * Create companyShare object to use the add, remove, print functionalities.
     */
    var companyShares = new utility.CompanyShares();
    /**
     * Display the choices
     */
    outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save and exit");
        /**
         * Ask for choice and execute accordingly using switch case
         */
      var choice = readline.questionInt("Enter valid choice :");
      switch (choice) {
        case 1:
          companyShares.addTolist();
          break;
        case 2:
          companyShares.removeFromList();
          break;
        case 3:
          companyShares.print();
          break;
        case 4:
          companyShares.writeList();
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
module.exports = { main };