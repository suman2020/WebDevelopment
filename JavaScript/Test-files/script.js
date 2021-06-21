var age = prompt("Enter your age");
age = Number(age);



// Function Declaration:

function sayHello(){
    console.log("sayHello");
}

sayHello();

var introduce = function()
{
    console.log("Hey there");

}
introduce();

function VerficationConsole(age){

    if(age <18){
        alert("Sorry, you are too young to drive this car. Powering off");
        console.log("Sorry, you are too young to drive this car. Powering off");

    }
    else if(age ===18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else{
        alert("Powering on. Enjoy the ride");
    }
}
VerficationConsole(age);

/*
arguments: multiply(3,2)
parameters: 
function multiply(2,3){
    return 2*3

}
*/

// Introduction to Data Structures: Arrays: 

var list = ['suman','thapa','magar'];
console.log(list);

var functionList= [VerficationConsole(),introduce(),sayHello()];

console.log(functionList);

var mixedList = ['apples', 24,true, false, undefined, introduce(), list];
console.log(mixedList);


// pre defined mtethods for array:
list.shift();   //removes the first element
list.pop();     //removes the last element
list.unshift(); //add element to the beginning of list
list.push('elephant'); //add element to the last index
list.concat(["bee", "deer"]); // concatenate two arrays
list.sort();     // sort the list

console.log(list);
concat_list = list.concat(["bee", "deer"]);

console.log(concat_list);



// Data structure: OBJECTS

var user = {
    name: "Suman",
    age: 22,
    hobby: "soccer",
    isMarried: false,
    sports: ["volleyball","soccer","table tennis"],
    shout: function(){
        console.log("AHHHHHHHHHH");
    }
};
//methods are functions inside an object

// adding new element to the object
user.favoriteFood = "Momo";

// modifying the previous element
user.isMarried = true;

var example = [
    {
        username:"andy",
        password:"suman",

    },
    {
        username: "suman",
        password: "andy"
    }
    ] ;


var emptyObj = {};
var nullObj = null;

nullObj.name = "suman" ; // gives out error cause it is declared as null
emptyObj.name = "SUman" ;  // adds name: "suman" to the object property


