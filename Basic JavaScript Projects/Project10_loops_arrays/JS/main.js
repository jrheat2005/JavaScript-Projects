function func() { //function counts the length of the name below and inputs in the console
    console.log("John Cena".length);
}
func();

function Call_Loop() { //functions counts all the way to 25 
    var Digit = "";
    var X = 1;
    while (X < 26) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Pianos", "Bass", "Violin", "Trumpet", "Flute"]; //displays all the instruments so you dont have to document.write for each of them seperately 
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {  //holds a list of of pets in a array and displays one of them 
    var Pet = [];
    Pet[0] = "Mocha";
    Pet[1] = "Tigger";
    Pet[2] = "Joey";
    Pet[3] = "Bella";
    Pet[4] = "Penny";
    document.getElementById("Array").innerHTML = "This cats name is " + Pet[3] + ".";
}

function constant_function() { //using a constant to display the sentence
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}
function myFunction() { //utilizes return and display PI
    return Math.PI;
  }
  
  document.getElementById("demo").innerHTML = myFunction();

var X = 12; //shows how var and let are different 
document.write(X);
{
    let X = 23;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = { //uses a objects to display the description of the car 
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = ""; //utilizes break and counts to 2 
let i = 0;
while (i < 5) {
    text += i + "<br>";
    i++;
    if(i === 3) break;
}
document.getElementById("brk").innerHTML = text;

let num = ""; //utilizes continue and displays throuhg 4 but skips 3
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    num += i + "<br>";
}  
document.getElementById("continue").innerHTML = num;