var B = 24; //assign global variable
function Number_Subtract() { //assign function name
    document.write(20 - B + "<br>");
}
function Number_Add() { //assign function name
    var C = 1; //assign local variable
    document.write(C + 30);
}
function Numbers() { //attempting to use local variable function
    console.log(C + 23); //debugging and to fix just need to change C to create a local variable or use a global variable
}
Numbers(); //display function 
Number_Add(); //display function 
Number_Subtract(); //display function 

function get_Date() { //assign function name
    if (new Date().getHours() < 18) { //if statement
        document.getElementById("Greetings").innerHTML = "How are you today"; //assign id
    }
}
function Age_Check() { //assign function name
    var Age, Can_Drink; //assign variable
    Age = document.getElementById("Age").value; //assign id
    if (Age > 20) { 
        Can_Drink = "Old Enough"; //if true
    } else {
        Can_Drink = "Not Old Enough"; //if false
    }
    document.getElementById("Age_Checker").innerHTML = Can_Drink; //assign id
}
function Age_Function() { //assign function name
    Ages = document.getElementById("Ages").value;
    if (Ages > 18) { 
        Vote = "You are old enough to vote!"; //if true
    } 
    else {
        Vote = "Not old enough to vote!"; //if false
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //assign id
}

function Time_function() { //assign function name
    var Time = new Date().getHours(); //assign variable
    var Reply; //assign variable
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!"; //if true
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."; //if oither option true
    }
    else {
        Reply = "It is evening time"; //if false
    }
    document.getElementById("Time_of_day").innerHTML = Reply //assign id
}