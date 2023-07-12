function full_Sentence() { //assign function
    var part_1 = "I have "; //assign variable
    var part_2 = "made this "; //assign variable
    var part_3 = "into a complete ";  //assign variable
    var part_4 = "sentence."; //assign variable
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //concatenate sentences
    document.getElementById("Concatenate").innerHTML = whole_sentence; //assign id 
}
function slice_Method() { //assign function
    var Sentence = "All work and no play makes Johny a dull boy"; //assign variable
    var Section = Sentence.slice(27,33); //assign variable 
    let result = Section.toUpperCase(); //to upper method
    let position = Sentence.search("play"); //search method
    document.getElementById("Slice").innerHTML = result + position; //assign id and slice method
}
function string_Method() { //assign function
    var X =182; //assign variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //assign id and to to string method
}
function precision_Method() {
    var X = 12938.45338778269673; //assign variable
    document.getElementById("Precision").innerHTML = X.toPrecision(12); //assign id and to precision method
}
function to_Fixed() { //assign function
    var num = 5.56789; //assign variable
    var n = num.toFixed(); //assign variable
    document.getElementById("Fixed").innerHTML = n; //assign id and to fixed method
}
function myFunction() { //assign function
    document.getElementById("myText").value = "Johnny Bravo"; //assign id and .value 
  }