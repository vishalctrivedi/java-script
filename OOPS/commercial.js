var utilityOops = require("../utility/utilityOops");
var read = require("readline-sync");
var file = require("fs");
var customerData = file.readFileSync("customer.json", "utf8");
var companyData = file.readFileSync("company.json", "utf8");
var customerDataJson = JSON.parse(customerData);
var companyDataJson = JSON.parse(companyData);
var stockAccount = new utilityOops.StockAccount(customerDataJson, companyDataJson);
console.log("Enter 1 to create account:");
console.log("Enter 2 to buy shares");
console.log("Enter 3 to sell shares");
console.log("Enter 4 to information shares of company and customer");

var choice = read.questionInt("choose the number:");
while(choice>4 || choice<0)
{
    choice =read.questionInt("Enter valid choice ")
}
switch (choice) 
{
  case 1:
    stockAccount.stockCreate();
    break;
  case 2:
    stockAccount.buy(customerDataJson, companyDataJson);
    break;
  case 3:
    stockAccount.sell(customerDataJson, companyDataJson);
    break;
  case 4:
    stockAccount.print(customerDataJson, companyDataJson);
    break;
}