var utility = require('../utility/utility')
const readline = require('readline-sync');

function ticTacToe() 
{
    var flag = false;
    var arr = utility.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    var count = 1;
    while (count <= 9) 
    {
        arr = utility.computerPlayer(arr);
        count++;
        while (count > 4) 
        {
            flag = utility.check(arr);
            break;
        }
        if (flag) 
        {
            console.log("YOU LOSTT!!");
            break;
        }
        else if (count == 8) 
        {
            console.log("IT'S A DRAW!!");
            break;
        }
        arr = utility.userPlayer(arr,readline);
        while (count > 4) 
        {
            flag = utility.check(arr);
            break;

        }
        if (flag) 
        {
            console.log("YOU WONN!!!");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();