var fileStream=require('fs');
var UtilityOops=require('../utility/utilityOops');

var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);
 
var rice=object.Rice;
var wheat=object.Wheat;
var pulses=object.Pulses;
var sumrice=0

for(let i in rice )
{
    var name=rice[i].name;
    var weight=rice[i].weight;
    var price=rice[i].price;
    var total=weight * price;
    var sumrice=sumrice+total;

    console.log("the total value of",rice[i].name,"is",rice[i].weight * rice[i].price );
    i=new UtilityOops.Rice(name,weight,price)

}
console.log("Total price of rice is "+sumrice);
console.log();

var sumwheat=0;
for(let j in wheat)
{
    var name=wheat[j].name;
    var weight=wheat[j].weight;
    var price=wheat[j].price;
    var total=weight * price;
    console.log("the total value of",wheat[j].name,"is",wheat[j].weight * wheat[j].price );
    j=new UtilityOops.Wheat(name,weight,price)
    sumwheat=sumwheat+total;
}
console.log("Total price of wheat is "+sumwheat);
console.log();

var sumpulses=0;  
for(let k in pulses)
{
    var name=pulses[k].name;
    var weight=pulses[k].weight;
    var price=pulses[k].price;
    var total=weight * price;
    console.log("the total value of",pulses[k].name,"is",pulses[k].weight * pulses[k].price );
    k=new UtilityOops.Pulses(name,weight,price)
    sumpulses=sumpulses+total;
}
console.log("Total price of pulses is "+sumpulses+"\n")
var res=sumrice+sumwheat+sumpulses;
console.log("Total bill is "+res);