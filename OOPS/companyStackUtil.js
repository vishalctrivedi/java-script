var read = require("readline-sync");
var file = require("fs");
var accessDs = require("../utility/utilityDataStructures");
class CompanySharesQueue 
{
    constructor() 
    {
        this.Queue = new accessDs.LinkedListQueue;
        try {
            /**
             * Pass the path of json file and read it and push the objects using add method of stack
             */
            this.data = JSON.parse(
                file.readFileSync("CompanySharesQueue.json")
            );
            console.log(this.data);

            for (let j = 0; j < this.data.company.length; j++) {
                this.Queue.enQueue(this.data.company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    /**
     * Function to add the stock to the current file
     */
    addTolist() {
        console.log(this.Queue.printShares());
        var flag = false;
        do {
            /**
             * Validation to accept only characters
             */
            var name = read.question("Enter the name want to add : ");
            var symbol = read.question("Enter the symbol");
            if (!isNaN(name) || !isNaN(symbol)) {
                console.log("Please enter alphabetics only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var share = read.questionInt("Enter the share :");
        var price = read.questionInt("Enter the price :");
        var d=new Date();
        var date=d.toString();

        /**
         * Access all the data provided by user and add push it to the stack
         */
        this.Queue.enQueue({
            name: name,
            symbol: symbol,
            share: share,
            price: price,
            date: date
        });
        /**
         * Display the elements in the stack after adding
         */
        console.log("Elements after adding to the list :");
        console.log(this.Queue.printShares());
    }
    removeFromList() {
        /**
         * Show the elements in the stack and ask to enter the name of the company to remove
         */
        console.log(this.Queue.printShares());
        var company = read.question("Enter company name or symbol: ");
        this.Queue.removeStock(company);
        /**
         * Display the elements after removing
         */
        console.log(this.Queue.printShares());
    }
    /**
     * to display detailed details in the stack
     */
    print() {
        console.log(this.Queue.printShares());
    }
    /**
     * To write the details in JSON file
     */
    writeList() {
        /**
         * Stringify the elements and pass the array to the object to write into a json file
         */
       
       // this.data.company.push(this.Queue.deQueue());
         file.writeFileSync(
            "CompanySharesQueue.json",
            JSON.stringify(this.Queue.printShares()),
            function (err) {
                if (err) {
                    throw err;
                }
            }
        );
    }
}
module.exports = { CompanySharesQueue };