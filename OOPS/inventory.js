var fileStream=require('fs');
var UtilityOops=require('../utility/utilityOops');

var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);
 
var d=object.Rice;
var e=object.Wheat;
var f=object.Pulses;
var sum=0

for(let i in d )
{
    var name=d[i].name;
    var weight=d[i].weight;
    var price=d[i].price;
    var total=weight * price;
    var sum=sum+total;

    console.log("the total value of",d[i].name,"is",d[i].weight * d[i].price );
    i=new UtilityOops.Rice(name,weight,price)

}
console.log(sum);
console.log();

var sum1=0;
for(let j in e)
{
    var name=e[j].name;
    var weight=e[j].weight;
    var price=e[j].price;
    var total=weight * price;
    console.log("the total value of",e[j].name,"is",e[j].weight * e[j].price );
    j=new UtilityOops.Wheat(name,weight,price)
    var sum1=sum1+total;
}
console.log(sum1);
console.log();

var sum2=0;  
for(let k in f)
{
    var name=f[k].name;
    var weight=f[k].weight;
    var price=f[k].price;
    var total=weight * price;
    console.log("the total value of",f[k].name,"is",f[k].weight * f[k].price );
    k=new UtilityOops.Pulses(name,weight,price)
    var sum2=sum2+total;
}
console.log(sum2+"\n")
var res=sum+sum1+sum2;
console.log("Total bill is "+res);