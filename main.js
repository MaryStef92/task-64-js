
const person = {Name: "Manuel", lastName: "Stefaniuk", age: 3, eyeColor: "brown"};
 
function showData() {
    document.getElementById ("mainPhoto").src = "https://haircutinspiration.com/wp-content/uploads/Side-Part-and-Side-Brush-Back.jpg"; 
    document.getElementById ("age").innerHTML = "Age: " + person.age;
    document.getElementById ("eyecolor").innerHTML ="Eyes color: " + person.eyeColor ;
    document.getElementById ("name").innerHTML = "Name: " + person.Name;
    document.getElementById ("surName").innerHTML ="Surname: " + person.lastName;
}
