const fileStream = require('fs')
const string = fileStream.readFileSync('oops.txt', 'utf8')//acessing file

const utilOops = require('../utility/utilityOops')//acessing function
const read = require('readline-sync')

var name = read.question('enter name')//reading input from the user
while (!isNaN(name))//validating for the name it should be string not number
{
    console.log('enter valid name')
    name = read.question('enter name')//reading input from the user
}

var fullName = read.question('enter fullname')
while (!isNaN(fullName))//validating for the name it should be string not number
{
    console.log('enter valid fullName')
    fullName = read.question('enter your fullname')//reading input from the user
}

var num = read.questionInt('enter phone number')
while (isNaN(num) && num.length!=09)//validating for the name it should be string not number
{
    console.log('enter valid number')
    num = read.question('enter your phone number')//reading input from the user
}

var date = new Date();//creating object of date
var day=date.toDateString();
var ans = utilOops.replaceUsingRegex(name, fullName, num, day, string);
console.log(ans);
