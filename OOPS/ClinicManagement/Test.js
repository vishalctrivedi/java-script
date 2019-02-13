var util=require('../ClinicManagement/TestNew');
var file=require('fs');
var read=require('readline-sync');
var data=file.readFileSync('cliniquemanagement.json','utf8');
var object=JSON.parse(data);
var patient=new util.Patient;
var doctor=new util.Doctors;
console.log("Enter 1 to search Patients");
console.log("Enter 2 to search Doctors");
console.log("Enter 3 to take appointment");
var number=read.questionInt("choose a number: ");

if(number==1)
{
    patient.searchpatient(object)
}
if(number==2)
{
    doctor.searchDoctor(object)
}
if(number==3)
{
    doctor.appointment(object)
}

