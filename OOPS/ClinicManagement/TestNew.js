var read=require('readline-sync')
//var Utility=require('../../utility/utility')
class Doctors{
    constructor(){

    }
    searchDoctor(data){
        var doctors=data.Doctors
        var number=read.questionInt("Enter \n 1 to search Doctor by Name \n 2.by Id \n 3.by Specialization:")
        if(number==1)
        {
            var name1=read.question("Enter Doctor name:")
            for (const key in doctors) {
                if(doctors[key].Name==name1)
                {
                    console.log("-------Your Doctor Information is-------")
                    console.log(doctors[key])
                    console.log("-----------------------------------------")

                }
              
            }

        }
        if(number==2)
        {
            var Id1=read.question("Enter Doctor Id:")
            for (const key in doctors) {
                if(doctors[key].Id==Id1)
                {
                    console.log("-------Your Doctor Information is-------")
                    console.log(doctors[key])
                    console.log("-----------------------------------------")

                }
              
            }

        }
        if(number==3)
        {
            var sp=read.question("Enter Doctor Specialization:")
            for (const key in doctors) {
                if(doctors[key].Specialization==sp)
                {
                    console.log("-------Your Doctor Information is-------")
                    console.log(doctors[key])
                    console.log("-----------------------------------------")

                }
              
            }

        }

    }
    appointment(data)
    {
        var patient=data.Patient
        var doctors=data.Doctors
        var arrdr=[]
        var arr11=[]
            var arrpa=[]
            var arrtime=[]
            console.log("Doctors list is:")
            for (const key in doctors) {
                arr11.push(doctors[key].Name)
            }
            console.log(arr11)
            var c=0
            for (const key in patient) {
                var drname=""
                var namedr=read.question(" Enter Doctor Name you want take appointment:")
                  for(let key=0;key<2;key++)
                  {
                    if(doctors[key].Name==namedr)
                    {
                        arrdr.push(doctors[key].Name)
                        arrtime.push(doctors[key].Availability)
                       var n= doctors[key].Numberofappointmaent
                       
                       
                       
                    }
                
                }
               
                arrpa.push(patient[key].Name)
                c++
            }
            console.log()
            console.log("slno"+" Doctor Name   Patient Name   Availability Time")
            for(let i=0;i<c;i++)
            {
             console.log(i+1+"    "+arrdr[i]+"       "+arrpa[i]+"          "+arrtime[i])   
            }
           
            var arrc=[]
            for(let i=0;i<doctors.length;i++){
                var c=0
                arrc.push([])
                for(let j=0;j<arrdr.length;j++)
                {
                    if(doctors[i].Name==arrdr[j])
                    {
                        c++;
                    }
                }
                var s=""+c+doctors[i].Name
                if(!arrc.includes(s))
                {
                arrc.push(s)
                }

            }
            console.log()
          var sortarr=arrc.sort();
          var st=sortarr[sortarr.length-1]
          var st1=st.substring(1, st.length);

          console.log(" popular Doctor is:"+st1)
            

        }
    }
   


    

class Patient{
    constructor(){}
    searchpatient(data){
        var patient=data.Patient
        var number1=read.questionInt("Enter \n 1 to search patient by Name \n 2.by Id \n 3.by mobilenumber:")
            if(number1==1)
            {
                var name1=read.question("Enter patient name:")
                for (const key in patient) {
                    if(patient[key].Name==name1)
                    {
                        console.log("-------Your patient Information is-------")
                        console.log(patient[key])
                        console.log("-----------------------------------------")

                    }
                  
                }

            }
            if(number1==2)
            {
                var Id1=read.question("Enter patient Id:")
                for (const key in patient) {
                    if(patient[key].Id==Id1)
                    {
                        console.log("-------Your patient Information is-------")
                        console.log(patient[key])
                        console.log("-----------------------------------------")

                    }
                  
                }

            }
            if(number1==3)
            {
                var mobilenumber1=read.question("Enter patient mobilenumber:")
                for (const key in patient) {
                    if(patient[key].mobilenumber==mobilenumber1)
                    {
                        console.log("-------Your patient Information is-------")
                        console.log(patient[key])
                        console.log("-----------------------------------------")

                    }
                  
                }

    }
}
}
module.exports={Doctors,Patient
}

