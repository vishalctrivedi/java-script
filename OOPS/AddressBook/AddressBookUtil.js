
class AddressBook {

    address(data) {
        console.log("Enter 1 for add person information")
        console.log("Enter 2 for update person information")
        console.log("Enter 3 for remove person information")
        console.log("Enter 4 for sort the addressbook based on ZIP")
        console.log("Enter 5 for sort the addressbook based on firstname")
        console.log("Enter 6 for Print all addressbook information")
        var num = read.questionInt("Select  any number:")
        switch (num) {
            case 1: this.addPerson(data)
                break;
            case 2: this.updatePerson(data)
                break;
            case 3: this.removeperson(data)
                break;
            case 4: this.sortzip(data)
                break;
            case 5: this.sortfname(data)
                break;
            case 6: this.printadd(data)
                break;

        }

    }
    addPerson(data) {
        var fname = read.question("Enter firstname of person :")
        var lname = read.question("Enter lastname of person :")
        var city1 = read.question("Enter city of person:")
        var state1 = read.question("Enter state of person:")
        var phonenum1 = read.question("Enter phonenumber:")
        var zip = read.question("Enter zip code:")
        //var o=new Person(fname,lname,city1,state1,zip,phonenum1)
        data.Person.push(
            {
                personfname: fname,
                personlname: lname,
                phonenumber: phonenum1,
                city: city1,
                state: state1
            }
        )

        var d = file.writeFileSync('Address.json', JSON.stringify(data))
    }
    updatePerson(data) {
        var name = read.question("enter Firstname of person :")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for  zip code of person to be update")
                var num1 = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.firstname(data, index)
                        break;
                    case 2: this.lastname(data, index)
                        break;
                    case 3: this.phonenumber(data, index)
                        break;
                    case 4: this.city(data, index)
                        break;
                    case 5: this.state(data, index)
                        break;
                    case 6: this.zipcode(data, index)
                        break;
                }
            }
        }
    }
    firstname(data, index) {
        var fname1 = read.question("enter the name changed first name:")
        data.Person[index].personfname = fname1
        var d = file.writeFileSync('Address.json', JSON.stringify(data))

    }
    lastname(data, index) {
        var lname1 = read.question("enter changed last name:")
        data.Person[index].personlname = lname1
        var d = file.writeFileSync('Address.json', JSON.stringify(data))

    }
    phonenumber(data, index) {
        var phonenumber1 = read.question("enter  changed phonenumber:")
        data.Person[index].phonenumber = phonenumber1
        var d = file.writeFileSync('Address.json', JSON.stringify(data))

    }
    city(data, index) {
        var cityname = read.question("enter changed city name")
        data.Person[index].city = cityname
        var d = file.writeFileSync('Address.json', JSON.stringify(data))

    }
    state(data, index) {
        var statename = read.question("enter the name changed first name")
        data.Person[index].state = statename
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    zipcode(data, index) {
        var zipcode = read.question("enter the name changed first name")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

    }
    removeperson(data) {

        var name = read.question("enter name of person to be remove:")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                var dd = data.Person.splice(index, 1);
            }
            var d = file.writeFileSync('Address.json', JSON.stringify(data))

        }

    }
    sortfname(data) {
        let fname = data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname)
                return 0
            if (a.personfname > b.personfname)
                return 1
            if (a.personfname < b.personfname)
                return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);


    }
    sortzip(data) {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);

    }
    printadd(data) {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }


    }
}






class AddressBookManager {
    constructor() {
        this.personarr = [];
        this.fnamearr = [];
        this.lnamearr = [];
        this.cityarr = [];
        this.statearr = [];
        this.ziparr = [];
        this.phonenumberarr = [];
    }
    readContacts() {
        var file = require('fs')
        var data1 = file.readFileSync('/home/admin1/VISHAL/OOPS/AddressBook/Address.json', 'utf8')
        var data = JSON.parse(data1);
        for (let i in data.Person) {
            this.personarr.push(data.Person[i]);
        }

        for (let i in data.Person) {
            this.fnamearr.push(data.Person[i].personfname);
        }
        console.log(fnamearr);

        for (let i in data.Person) {
            this.lnamearr.push(data.Person[i].personlname);
        }

        for (let i in data.Person) {
            this.cityarr.push(data.Person[i].city);
        }

        for (let i in data.Person) {
            this.statearr.push(data.Person[i].state);
        }

        for (let i in data.Person) {
            this.ziparr.push(data.Person[i].zip);
        }

        for (let i in data.Person) {
            this.phonenumberarr.push(data.Person[i].phonenumber);
        }

    }



    open() 
    {
        console.log(this.fnamearr);
    }


    quit()
    {
        return;
    }
}





class Person {
    constructor() 
    {
        this.firstname;
        this.lastname;
        this.city;
        this.state;
        this.zipcode;
        this.phonenumber;
    }
    createPerson()
    {
        console.log("sssssssssssss")
        this.firstname=read.question("Enter the first name ");
        this.lastname=read.question("Enter the last name");
        this.city=read.question("Enter the city");
        this.state=read.question("Enter the state");
        this.zipcode=read.question("Enter the zipcode");
        this.phonenumber=read.question("Enter the phonenumber");
        return;
    }
}



module.exports={AddressBook,Person,AddressBookManager}