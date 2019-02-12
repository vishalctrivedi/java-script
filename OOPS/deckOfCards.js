var utilityOops = require("../utility/utilityOops");
var deck=new utilityOops.Deck();
var cardarr=deck.createDeck();
var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(j=0;j<9;j++)
    {
        arr[i][j]=cardarr[j+a]
    }
    a=a+9;
}

for(let i=0;i<arr.length;i++)
{
    console.log("Deck of Cards["+i+"]= "+"["+""+arr[i]+"]");
}