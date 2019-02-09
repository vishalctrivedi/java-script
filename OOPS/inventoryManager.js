var utilOops = require('../utility/utilityOops');
var readline = require('readline-sync');
var fileRead = require('fs');
var data = fileRead.readFileSync('stock.json', 'utf8');
function inventoryManage() 
{
        var data1 = JSON.parse(data);
        var object = new utilOops.InventoryManage()
        here: while (ch != 5) 
        {
            console.log("Press 1 to add :");
            console.log("Press 2 to remove :");
            console.log("Press 3 to edit :");
            console.log("Press 4 to print:");
            console.log("Press 5 to exit :");
            var ch = readline.questionInt("Enter the number :")
            switch (ch) 
            {
                case 1:
                    object.add(data1)
                    break;
                case 2:
                    object.remove(data1)
                    break;
                case 3:
                    object.edit(data1)
                    break;
                case 4:
                    object.print(data1)
                    break;
                case 5:
                    break;
                default:
                    console.log("Please enter the correct number ");
                    break here;
            }
        }
} 
inventoryManage();