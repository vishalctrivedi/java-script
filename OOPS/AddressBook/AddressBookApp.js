var utility=require('/home/admin1/VISHAL/OOPS/AddressBook/AddressBookUtil.js')
var file=require('fs')
var data1=file.readFileSync('Address.json','utf8')
var data=JSON.parse(data1)
var object=new utility.AddressBook
var addm=new utility.AddressbookManager
object.address(data)


