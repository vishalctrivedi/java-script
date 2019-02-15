var read=require('readline-sync');
var utility=require('/home/admin1/VISHAL/OOPS/AddressBook/AddressBookManager.js');
console.log("Enter 1 to add contact");
console.log("Enter 2 to display the contacts");
console.log("Enter 3 to exit");
var choice=read.question("Enter your choice")
var addressmanager=new utility.AddressBookManager();
while(choice<4 && choice>0)
{
    switch(choice)
    {
        case 1: 




        case 2:addressmanager.readContacts();
        {

        }
    }
}