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
