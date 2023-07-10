function addition_function() { //addition function
    var addition = 2 + 15; //decalring variable
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition; //ID
}
function subtraction_function() { //subtraction function
    var subtraction = 5 - 3; //decalring variable
    document.getElementById("Math2").innerHTML = "5 - 3 = " + subtraction; //ID
}
function multiplication_function() { //mulitplication function
    var multiplication = 12 * 23; //decalring variable
    document.getElementById("Math3").innerHTML = "12 * 23 = " + multiplication; //ID
}
function extra_function() { //muiltiple math problems in one
    var division = 27 / 3 + 335 * 2; //decalring variable
    document.getElementById("Math4").innerHTML = "27 / 3 + 335 * 2 = " + division; //ID
}
function modulus_operator() { //remainder function
    var simple_Math = 25 % 6; //decalring variable
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 your have a remainder of: " + simple_Math; //ID
}
function negation_operator() { //negative function
    var x = 23; //decalring variable
    document.getElementById("Math6").innerHTML = -x; //ID
}
function increment_operator() { //plus 1 function
    var x = 76; //decalring variable
    x++; //plus 1
    document.getElementById("Math7").innerHTML = x; //ID
}
function decrement_operator() { //negative 1 function
    var x = 37; //decalring variable
    x-- //minus 1
    document.getElementById("Math8").innerHTML = x; //ID
}
document.write(Math.PI); //writing pi

function generateRandomNumber() { //random number 0 through 25
    var randomNumber = Math.floor(Math.random() * 26); //decalring variable
    alert("Random number between 0 and 25: " + randomNumber); //alert
  }