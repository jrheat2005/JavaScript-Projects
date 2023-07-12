function Ride_Function() { //declaring function
    var Height, Can_Ride; //declaring variable
    Height = document.getElementById("Height").value; //new id
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; //new id
}
function Vote(){ //declaring function
    var Age, Can_Vote; //decarling variable
    Age = document.getElementById("Age").value; //new id
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote"; //new id
}
function Vehicle(Make, Model, Year, Color) { //declaring function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //declaring variable
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //declaring variable
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //declaring variable
function myFunction() { //declaring function
    document.getElementById("Keywords_and_Constructors").innerHTML = //new id
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function Person(first, last, age, eye) { //declaring function
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
  }
  
  var Friend1 = new Person("John", "Jacob", 19, "blue"); //declaring variable
  var Friend2 = new Person("Sam", "Heath", 18, "brown"); //declaring variable
  
  function This_one() { //declaring function
    document.getElementById("New_and_This").innerHTML = "My friend's name is " + //new id
      Friend1.first + " and his last name is " + Friend1.last +
      " he is " + Friend1.age + " years old and his eye color is " +
      Friend1.eye;
  }

  function count_Function() { //declaring function
    document.getElementById("Counting").innerHTML = Count(); //new id
    function Count() { //declaring function
        var Starting_point = 7; //declaring variable
        function Plus_one() {Starting_point += 1;} //declaring function
        Plus_one();
        return Starting_point;
    }
  }