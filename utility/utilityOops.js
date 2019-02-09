var read = require('readline-sync')
var file = require('fs')
var utilDS=require('../utility/utilityDataStructures')

class Stock 
{
    constructor(name, share, price) 
    {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    addValue(share, price) 
    {
        var sum = price * share;
        return sum;
    }
}


class InventoryManage 
{

    constructor() 
    {

    }
    add(data) 
    {
        var name = read.question("Enter the name of the stock to add :");
        var shares = read.questionInt("Enter number of shares :");
        var quantity = read.questionInt("Enter the price of the shares :");
        data.Stock.push(
            {
                name: name,
                share: shares,
                price: quantity
            })
        var d = file.writeFileSync('stock.json', JSON.stringify(data))
    }

    remove(data) 
    {
        var name = read.question("Enter the name of the stock want to remove :")
        for (let i = 0; i < data.Stock.length; i++) 
        {
            if (data.Stock[i].name == name) 
            {
                var index = data.Stock.indexOf(data.Stock[i])
                data.Stock.splice(index, 1)
            }
            var d = file.writeFileSync('stock.json', JSON.stringify(data))
        }
    }

    print(data) 
    {
        var stock = data.Stock;
        for (const key in stock) 
        {
            console.log(stock[key]);

        }
    }
    edit(data) 
    {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :")
        var shr = read.question("Enter noofShares to edit : ")
        var money = read.question("Enter the shares price :")
        for (let key in stock) 
        {
            if (stock[key].name == name)
                var value = key;
            if (stock[key].share == shr)
                var value1 = key;
            if (stock[key].price == money)
                var value2 = key;
        }
        var name1 = read.question("Enter the new name of the share :");
        stock[value].name = name1;
        var name2 = read.question("Enter the new noofShares :");
        stock[value1].share = name2;
        var name3 = read.question("Enter  the new price of the shares :")
        stock[value2].price = name3;
        var d = file.writeFileSync('stock.json', JSON.stringify(data))
    }
}



class Rice 
{
    constructor(name, weight, price) 
    {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    addValue(weight, price) 
    {
        var sum = price * weight;
        return sum;
    }
}


class Pulses 
{
    constructor(name, weight, price) 
    {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    addValue(weight, price) 
    {
        var sum = price * weight;
        return sum;
    }
}

class Wheat 
{
    constructor(name, weight, price) 
    {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    addValue(weight, price) 
    {
        var sum = price * weight;
        return sum;
    }
}








module.exports={Stock,Rice,Pulses,Wheat,InventoryManage,Person,
   
   





    replaceUsingRegex(name, fullName, num, day, fileString) 
    {
        fileString = fileString.replace(/<<name>>/g, name)//replace method will replace the 1st value with 2nd sec value
        fileString = fileString.replace(/<<full name>>/g, fullName)//g reads global it will change all occurances in that file
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, day);//get the date from user
        return fileString;
    },
}