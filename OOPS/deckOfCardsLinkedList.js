var S=require('../utility/utility');
var D=require('../utility/utilityDataStructures');
var suit=["\♣","\♦","\♥","\♠"];
var rank=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
var cards=suit.length*rank.length;
var cardarr=[];
for(let i=0;i<suit.length;i++)
{
    for(let j=0;j<rank.length;j++)
    {
        var temp="";
        cardarr.push(temp+rank[j]+suit[i])
    }
}

for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i];
    cardarr[num]=temp;
}



var Player1=new D.Queue;
var Player2=new D.Queue;
var Player3=new D.Queue;
var Player4=new D.Queue;
for(let i=0;i<cardarr.length;i++)
{
    if(i>=0 && i<13)
    Player1.enQueue(cardarr[i]);
    else if(i>=13 && i<26)
    Player2.enQueue(cardarr[i]);
    else if(i>=26 && i<39)
    Player3.enQueue(cardarr[i]);
    else
    Player4.enQueue(cardarr[i]);
}

var data=Player1.printList();
var arr=data.split(" ");
var arr10=S.mergeSort(arr);
console.log(""+arr10);
console.log("\n");

var data1=Player2.printList();
var arr1=data1.split(" ");
var arr11=S.mergeSort(arr1);
console.log(""+arr11);
console.log("\n");

var data2=Player1.printList();
var arr2=data2.split(" ");
var arr12=S.mergeSort(arr2);
console.log(""+arr12);
console.log("\n");

var data3=Player1.printList();
var arr3=data3.split(" ");
var arr13=S.mergeSort(arr3);
console.log(""+arr13);
console.log("\n");