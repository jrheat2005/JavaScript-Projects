function This_Function() { //Button function
    var str = "This is the button text! "; //First Text
    var stl = "This is Interesting"; //Second Text
    document.getElementById("Button_Text").innerHTML = str + stl; //id name and concantenating the sentences
}
function This_One() { //decalring function
var slv = "Hello"; //first sentence
slv += " this is crazy"; //second sentence
document.getElementById("Second").innerHTML = slv; // id name and concantenating the sentences
}

function New_Function() {
    var num1 = 7;
    var num2 = 32;
    document.getElementById("multiplication").innerHTML = num1 * num2;
}
function addition_function() {
    var addition = 2 + 15;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}