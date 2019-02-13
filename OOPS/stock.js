const utilityOops = require('../utility/utilityOops')//calling util function
const fileStream = require('fs')
const json = fileStream.readFileSync('stock.json')
var object = JSON.parse(json)//parsing the json file
var stock = new utilityOops.Stock(name, share, price);
for (let key in object.Stock) 
{
    var name = object.Stock[key].name;
    var share = object.Stock[key].share;
    var price = object.Stock[key].price;
    console.log("The total value of "+object.Stock[key].name+" is "+stock.addValue(share,price));
}