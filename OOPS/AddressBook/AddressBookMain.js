var read=require('readline-sync');
var utility=require('../AddressBook/AddressBookUtil');
console.log("Enter 1 to add contact");
console.log("Enter 2 to display the contacts");
console.log("Enter 3 to exit");
var choice=read.question("Enter your choice")
var addressmanager=new utility.AddressBookManager();
if(choice<4 && choice>0)
{
    switch(choice)
    {
        case 1:
        {
            var person=new utility.Person();
            //console.log("ssssssssssssssss")
            person.createPerson();
            break;
        }
        case 2:
        {
            addressmanager.readContacts();
            break;
        }
    }
}