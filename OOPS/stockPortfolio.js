class StockPortFolio
{
    showresult()
    {
        var UtilityOops=require('../utility/utilityOops');
        var fileread=require('fs');
        var input=fileread.readFileSync('stockport.json','utf8');
        var object=JSON.parse(input);
        var totalStock=0;
        var stock=object.Stock;

    for(let i in stock)
    {
    var name=stock[i].stockname;
    var numberofshare=stock[i].numberofshare;
    var shareprice=stock[i].shareprice;
    var total=numberofshare * shareprice;
    console.log("The Total Value Of","[",stock[i].stockname,"]","Share Is",stock[i].numberofshare * stock[i].shareprice);
    totalStock=totalStock+total;
    i=new UtilityOops.Stock(name,numberofshare,shareprice);
    //var d=i.shareprice();
    }
    console.log("\n"+"Value Of Total Stocks: "+totalStock);
    }
}

module.exports={StockPortFolio}