var utilityOops = require("../utility/utilityOops");
var deck=new utilityOops.Deck();
var cardarr=deck.createDeck();
cardarr=deck.shuffle(cardarr);

var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(j=0;j<9;j++)
    {
        arr[i][j]=cardarr[j+a]
    }
    a=a+9;
    console.log(arr[i]);
    console.log();
}

