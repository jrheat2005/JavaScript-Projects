function my_Dictionary() { //function define
    var Animal = { //class define
        Species:"Dog", //adding to dictionary
        Color:"Black", 
        Breed:"Labrador", 
        Age:5,
        Sound:"Bark" // End of adding to dictionary
    };
    delete Animal.Sound; //Delete Sound 
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Get ID
}