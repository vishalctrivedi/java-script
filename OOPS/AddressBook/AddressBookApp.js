var utility=require('/home/admin1/VISHAL/OOPS/AddressBook/AddressBookUtil.js');
var read = require('readline-sync');
var file = require('fs');
var sort = require('../../utility/utility');
var addm=new utility.AddressbookManager();
addm.readContacts();
addm.open();
