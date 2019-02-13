var read = require('readline-sync')
var file = require('fs')
var utilDS = require('../utility/utilityDataStructures')

class Stock {
    constructor(name, share, price) {
        this.name = name;
        this.share = share;
        this.price = price;
    }
    addValue(share, price) {
        var sum = price * share;
        return sum;
    }
}


class InventoryManager {

    constructor() {

    }
    add(data) {
        var name = read.question("Enter the name of the stock to add :");
        var shares = read.questionInt("Enter number of shares :");
        var quantity = read.questionInt("Enter the price of the shares :");
        data.Stock.push(
            {
                name: name,
                share: shares,
                price: quantity
            })
        var d = file.writeFileSync('stock.json', JSON.stringify(data))
    }

    remove(data) {
        var name = read.question("Enter the name of the stock you want to remove :")
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].name == name) {
                var index = data.Stock.indexOf(data.Stock[i])
                data.Stock.splice(index, 1)
            }
            var d = file.writeFileSync('stock.json', JSON.stringify(data))
        }
    }

    print(data) {
        var stock = data.Stock;
        for (const key in stock) {
            console.log(stock[key]);

        }
    }
    edit(data) {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :")
        var shr = read.question("Enter noofShares to edit : ")
        var money = read.question("Enter the shares price :")
        for (let key in stock) {
            if (stock[key].name == name)
                var value = key;
            if (stock[key].share == shr)
                var value1 = key;
            if (stock[key].price == money)
                var value2 = key;
        }
        var name1 = read.question("Enter the new name of the share :");
        stock[value].name = name1;
        var name2 = read.question("Enter the new noofShares :");
        stock[value1].share = name2;
        var name3 = read.question("Enter  the new price of the shares :")
        stock[value2].price = name3;
        var d = file.writeFileSync('stock.json', JSON.stringify(data))
    }
}





class Items {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    calculatePrice() {
        return this.weight * this.price;
    }
}

class Rice extends Items {
    constructor(name, weight, price) {
        super(name, weight, price);
    }
}


class Pulses extends Items {
    constructor(name, weight, price) {
        super(name, weight, price);
    }
}

class Wheat extends Items {
    constructor(name, weight, price) {
        super(name, weight, price);
    }
}





nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    /**
     * create a constructor to initialize and store values
     */
    constructor(addressb) {
        this.addressb;
    }
    createAddress(addressb) {
        var name = read.question("Please enter your first name: ");
        while (!nameRestriction.test(name)) {
            console.log("Please enter String");
            name = read.question("Please enter your first name: ");
        }
        var lastName = read.question("Please enter your last name: ");
        /**
         * validating last name
         */
        if (nameRestriction.test(lastName) == false) {
            console.log("Invalid name!");
            return false;
        }
        /**
         * add the address information
         */
        console.log("***Address Info***");
        var street = read.question("Street: ");
        var city = read.question("City: ");
        if (nameRestriction.test(city) == false) {
            console.log("Invalid city name!");
            return false;
        }
        var state = read.question("State: ");
        if (nameRestriction.test(state) == false) {
            console.log("Invalid state name!");
            return false;
        }
        var nation = read.question("Nationality: ");
        if (nameRestriction.test(nation) == false) {
            console.log("Invalid Nationality!");
            return false;
        }
        var zip = read.question("Zip code: ");
        /**
         * zip code validation that should not exceed length 6
         */
        if (contactRestriction.test(zip) == false || zip.length != 6) {
            console.log("Invalid zip code!");
            return false;
        }
        var phoneNum = read.question("Phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            console.log("Invalid phone number!");
            return false;
        }
        /**
         * push each value into json
         */
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        /**
         * write file into json
         */
        file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    /**
     * comaparing name of each object and sort alphabetically
     */
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting() {
        console.log(addressb.Person.sort(this.compare1));
    }
    /**
     * open profile for given name
     */
    openProfile(addressb) {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            /**
                             * update profile
                             */
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    /**
                                     * update whole data after changes
                                     */
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    /**
                                     * save into json every time after update
                                     */
                                    save();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        pUpdate = read.question("No special characters Invalid number! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    //address();
                                    break;
                            }
                            break;
                        case 2:
                            /**
                             * to delete profile
                             */
                            var update = read.question("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            /**
                             * write file
                             */
                            file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            /**
                             * sort the profile by name
                             */
                            this.sorting(addressb);
                            save();
                            break;
                        case 4:
                            /**
                             * save file into json
                             */
                            function save() {
                                file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            //address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
                console.log("Profile unavailable!!Please create new one.");
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}





class StockAccount {
    constructor(customerDataJson, companyDataJson) {
        this.customerDataJson = customerDataJson;
        this.companyDataJson = companyDataJson;
    }
    stockCreate() {
        var name1 = read.question("enter the name : ");
        var id1 = read.question("enter the id : ");
        console.log(id1);
        var share1 = read.question("enter the number of shares : ");
        this.customerDataJson.customer.push({
            name: name1,
            id: id1,
            share: share1
        });
        console.log(this.customerDataJson.customer);

        var d = file.writeFileSync(
            "customer.json",
            JSON.stringify(this.customerDataJson)
        );
    }
    buy() {
        console.log(this.customerDataJson);
        var customerObject = this.customerDataJson.customer;
        var idNumber = read.question("enter the id :");
        for (let key in customerObject) {
            if (customerObject[key].id == idNumber) {
                var index = this.customerDataJson.customer.indexOf(
                    this.customerDataJson.customer[key]
                );
                var customername = customerObject[key].name;
                console.log("company information");
                console.log(this.companyDataJson);
                var name1 = read.question(
                    "enter name of company share you want to buy "
                );
                var companyDetails = this.companyDataJson.company;
                for (let i in companyDetails) {
                    if (companyDetails[i].name == name1) {
                        console.log("company number of shares price of each share");
                        console.log(companyDetails[i]);
                        var companyName = companyDetails[i].name;
                        var share = companyDetails[i].share;
                        var flag = false;
                        do {
                            var numberOfShares = read.questionInt(
                                "enter the number of shares you want to buy"
                            );
                            if (numberOfShares > share) {
                                console.log("Enter no of shares less than company shares ")
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)
                        var output =
                            "customer name : " +
                            customername +
                            " and name of company " +
                            companyName +
                            " buy number of shares " +
                            numberOfShares;
                        console.log(output);

                        //this.stackps(s);
                        var date = Date(Date.now());

                        // Converting the number of millisecond in date string
                        var time = date.toString();
                        //this.queuetime(time1);
                        var n = parseInt(this.customerDataJson.customer[index].share);
                        var n11 = parseInt(this.companyDataJson.company[i].share);
                        var num = parseInt(numberOfShares);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if (n11 > num) {
                            this.customerDataJson.customer[index].share = n1;
                            this.companyDataJson.company[i].share = n2;
                            this.customerDataJson.customer[index].LastTransaction = time;
                            var date = file.writeFileSync(
                                "customer.json",
                                JSON.stringify(this.customerDataJson)
                            );
                            //console.log(d)

                            var d1 = file.writeFileSync(
                                "company.json",
                                JSON.stringify(this.companyDataJson)
                            );
                        }
                    }
                }
            }
        }
    }
    sell() {
        console.log(this.customerDataJson);
        var customerObject = this.customerDataJson.customer;
        var id1 = read.question("enter the id :");
        for (let key in customerObject) {
            if (customerObject[key].id == id1) {
                var index = this.customerDataJson.customer.indexOf(
                    this.customerDataJson.customer[key]
                );
                var customername1 = customerObject[key].name;
                console.log("company information");
                console.log(this.companyDataJson);
                var name1 = read.question("enter name of company you want to sell ");
                var companyObject = this.companyDataJson.company;
                for (let key in companyObject) {
                    if (companyObject[key].name == name1) {
                        console.log("company number of shares and price of each share ");
                        console.log(companyObject[key]);
                        var companyName = companyObject[key].name;
                        var share = customerObject[key].share;
                        var flag = false;
                        do {
                            var number = read.questionInt(
                                "enter how many shares you want to sell ")
                            if (number > share) {
                                console.log("Enter no of shares greater than the current shares ")
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)

                        var output =
                            "customer name :" +
                            customername1 +
                            "and name of company " +
                            companyName +
                            "sell number of shares " +
                            number;
                        console.log(output);

                        //this.stackps(s);
                        var date = Date(Date.now());

                        // Converting the number of millisecond in date string
                        var time = date.toString();
                        //this.queuetime(time1);
                        var n = parseInt(this.customerDataJson.customer[index].share);
                        var n11 = parseInt(this.companyDataJson.company[key].share);
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        this.customerDataJson.customer[index].share = n1;
                        this.companyDataJson.company[key].share = n2;
                        this.customerDataJson.customer[index].LastTransaction = time;
                        var date = file.writeFileSync(
                            "customer.json",
                            JSON.stringify(this.customerDataJson)
                        );
                        var d1 = file.writeFileSync(
                            "company.json",
                            JSON.stringify(this.companyDataJson)
                        );
                    }
                }
            }
        }
    }

    print(customerDataJson, companyDataJson) {
        console.log("customer shares information :");
        console.log(this.customerDataJson);
        console.log("company shares information :");
        console.log(this.companyDataJson);
    }
}







class Player {
    constructor(cards) {
        this.cards = cards;
    }
    /**
     * Function to sort the cards.
     */
    sortedCards() {
        var sortedCards = [];
        //var access = require("../utility/utility");
        sortedCards = this.cards.sort();
        return sortedCards;
    }
}




class Card
{
    constructor(rank,suit)
    {
        this.rank=rank;
        this.suit=suit;
    }
}




class Deck  
{
    constructor()
    {
        this.suit = ["♣", "♦", "♥", "♠"];
        this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "jack", "queen", "king", "ace"];
    }
    createDeck()
    {
        var cardarr = [];
        for (let i = 0; i < this.suit.length; i++) 
        {
            for (let j = 0; j < this.rank.length; j++) 
            {
                cardarr.push(new Card(this.rank[j],this.suit[i]));
            }
        }
        return cardarr;
        
    }


    printCard(Card)
    {
        return ""+Card.rank+Card.suit;
    }


    shuffle(cardarr)
    {
        var cards = this.suit.length * this.rank.length;
        for (let i = 0; i < cards; i++) 
        {
            var num = Math.floor(Math.random() * cards);
            var temp = cardarr[i];
            cardarr[i] = cardarr[num];
            cardarr[num] = temp;
        }
        return cardarr;
    }
        
}







module.exports = {
    Stock, Rice, Pulses, Wheat, InventoryManager, Address, StockAccount, Items, Player,Deck,Card,







    replaceUsingRegex(name, fullName, num, day, fileString) {
        fileString = fileString.replace(/<<name>>/g, name)//replace method will replace the 1st value with 2nd sec value
        fileString = fileString.replace(/<<full name>>/g, fullName)//g reads global it will change all occurances in that file
        fileString = fileString.replace(/91-xxxxxxxxxx/g, num)
        fileString = fileString.replace(/01-01-2016/g, day);//get the date from user
        return fileString;
    },





    deckOfCards() {
        try {
            var suits = ["♣", "♦", "♥", "♠"];
            var ranks = [
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "Jack",
                "Queen",
                "King",
                "Ace"
            ];
            var totalCards = suits.length * ranks.length;
            var cardArray = [];
            for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
                for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
                    var temp = "";
                    cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
                }
            }
            for (let shuffle = 0; shuffle < totalCards; shuffle++) {
                var num = Math.floor(Math.random() * totalCards);
                var temp = cardArray[shuffle];
                cardArray[shuffle] = cardArray[num];
                cardArray[num] = temp;
            }
            return cardArray;
        } catch (error) {
            console.log(error.message);
        }
    },



}
