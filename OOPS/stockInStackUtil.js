var read = require("readline-sync");
var file = require("fs");
var access = require("../utility/utilityDataStructures");

/*************************stockAccountStack***************************
 * @Purpose     :  To add and update the share info of company.
 * 
 * @Use Library : Java JSON Library
 *
 * @description : stockAccountStack implements a data type that might be used by a financial institution to keep track of customer information.
 *
 * @function    : stockAccountStack keep the track of information about the  company where company can buy and sell the share .
 *
 * @param       : object --> objects such as company which are at  companyShares.
 */
class companySharesStack {
    constructor() {
        this.stock = new access.StackLinkedList
        //try {
            var data = JSON.parse(
                file.readFileSync("companyList.json"))
            for (let j = 0; j < data.company.length; j++) {
                this.stock.push(data.company[j]);
            }
    } /*catch (err) {
            console.log("File not found");
        }
    }
    /**
     * addToStack to add the info about the company name,share and price
     * using stack implemented using linkedlist and push it to stack. 
     */
    addToStack() {
        var flag = false;
        do {
            var name = read.question("Enter the name want to add : ");
            if (!isNaN(name)) {
                console.log("Please enter alphabetics only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var share = read.questionInt("Enter the share :");
        var price = read.questionInt("Enter the price :");
        this.stock.push({
            name: name,
            share: share,
            price: price
        });
        console.log("Elemets after adding to list :");
        console.log(this.stock.printShares());
    }
    /**
     * removeFromStack to remove the info about the company name,share and price
     * using stack implemented using linkedlist and push it to stack. 
     */
    removeFromStack() {
        console.log(this.stock.printShares());
        var company = read.question("Enter company name: ");
        this.stock.pop(company);
        console.log(this.stock.printShares());
    }
    /**
     * To print all the details of the company using printlist method.
     */
    print() {
        console.log(this.stock.printShares());
    }
    /**
     * writeStock is to save the info about company.
     */
    writeStock() {
        file.writeFileSync(
            "companyList.json",
            JSON.stringify(this.stock.printShares()),
            function (err) {
                if (err) {
                    throw err;
                }
            }
        );
    }
}
module.exports = { companySharesStack }