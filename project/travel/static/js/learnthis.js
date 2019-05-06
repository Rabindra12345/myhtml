// this and global 
var car = {
    name: "bmw",
    year : 2015,
    printDetail: function(){
        console.log(this.name *this.year);
    }
}

// console.log(global);
// console.log(this);

function fullName(){
    console.log(this.fName + "" + this.lName);
}

var customerOne ={
    fName :"ram",
    lName:"dahal",
    print: fullName
}

var customerTwo ={
    fName :"hari",
    lName:"dulal",
    print: fullName
}

// customerOne.print();
// customerTwo.print();

fullName.call(customerOne);
fullName.call(customerTwo);

