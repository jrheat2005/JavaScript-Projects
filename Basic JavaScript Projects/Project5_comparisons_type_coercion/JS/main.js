var num1 = 10; //declaring variable
var num2 = 5; //declaring variable
var result = num1 + num2; //declaring variable
var compare = num1 < num2; //declaring variable
console.log("The result of the addition is:", result); //display in console
console.log("10 is smaller than 5 ", compare); //display in console
var john = 27; //declaring variable
document.write("john"); //display john
function Nan() { //decalre function
    document.getElementById("Test").innerHTML = 0/0; //set id
}
function Nan1() { //decalre function
    document.getElementById("Test1").innerHTML = isNaN('String'); //set id
}
function Nan2() { //decalre function
    document.getElementById("Test2").innerHTML = isNaN('0'); //set id
}
function Nan3() { //decalre function
    var high = -7e708 //declaring variable
    document.getElementById("Test3").innerHTML = high; //set id
}
function Nan4() { //decalre function
    var low = 6e406 //declaring variable
    document.getElementById("Test4").innerHTML = low; //set id
}
function Nan5() { //decalre function
    document.getElementById("Test5").innerHTML = 10 > 5; //set id
} 
document.write(3 == 3); // equal test
document.write("\n"); //space
document.write( 3 == 4); // equal test
document.write("\n"); //space
document.write(10 === 10); // equal test
document.write("\n"); //space
document.write(12 === "hi"); // equal test
document.write("\n"); //space
document.write(13 === "13"); // equal test
document.write("\n"); //space
document.write("hey" === "hi"); // equal test
document.write("\n"); //space
document.write(10 > 4 && 27 < 30); // and test
document.write("\n"); //space
document.write(10 == 7 || 10 > 7); // or test

function Not() { //decalre function
    document.getElementById("Test6").innerHTML = !(10 == 12); // set id
}