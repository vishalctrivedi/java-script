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
        var data1 = file.readFileSync('Address.json', 'utf8')
        var data = JSON.parse(data1);
        for (let i in data.Person) {
            this.personarr.push(data.Person[i]);
        }

        for (let i in data.Person) {
            this.fnamearr.push(data.Person[i].personfname);
        }

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
module.exports={AddressBookManager}