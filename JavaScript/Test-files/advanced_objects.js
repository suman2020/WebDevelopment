https://objectexplorer.netlify.app/ 

//------------ reference type-----------------

Objects are reference type in java script:

[]===[] // false
[1]===[1] // false

var object1 = {value:10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2; // true
object1 === object3; // false

object2.value =15;
object1.value // 15
object3.value = 10



//----------------- context----------------

// context vs scope
function b()
{
	let a = 4;
}

Context tells us where we are within the object.
Eg:
console.log(this) // gives window
console.log(this=== window) // true

this.alert("hello");

this:->  the object environment that we are in right now. Eg


const object4 = {
	a: function(){
		console.log(this); // object4 is this now. 
	}
}



//-------------instantiation/inheritance--------------------

class Player{
	constructor(name,type){
		console.log(this); // Wizard
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}

}

class Wizard extends Player{

	constructor(name,type){
		// console.log(this); gives error if kept before super()
		super(name,type);
		console.log(this); //Wizard {name: "Shelly", type: "Healer"}
	}
	play()
	{
		console.log(`Hello Good to see you. I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.introduce();
wizard1.play();
const wizard2 = new Wizard('Suman','White Magic');