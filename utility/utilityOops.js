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




module.exports={Stock,Rice,Pulses,Wheat,
   
   
   
   
   
    /*inventory(object)
    {
        var rice=object.rice;
        var pulses=object.pulses;
        var wheat=object.wheat;
        for(let key in rice)
        {
            console.log("The total rate of "+rice[key].name+" = "+rice[key].weight*rice[key].rate);
        }
        console.log("\n");
        for(let key in pulses)
        {
            console.log("The total rate of "+pulses[key].name+" = "+pulses[key].weight*pulses[key].rate);
        }
        console.log("\n");
        for(let key in wheat)
        {
            console.log("The total rate of "+wheat[key].name+" = "+wheat[key].weight*wheat[key].rate);
        }
    },*/




    replaceUsingRegex(name, fullName, num, day, fileString) 
    {
        fileString = fileString.replace(/<<name>>/g, name)//replace method will replace the 1st value with 2nd sec value
        fileString = fileString.replace(/<<full name>>/g, fullName)//g reads global it will change all occurances in that file
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, day);//get the date from user
        return fileString;
    },
}