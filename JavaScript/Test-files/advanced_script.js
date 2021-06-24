// ECMA script (ES) now Javascript

/* 
Variables declaration:
var
let (new in ECMAScript 6)
const (new in ECMAScript 6)

*/

const player = "suan";  // not able to change it
let experience = 120;
let wizardlevel = false;

if (experience >90)
{
	let wizardlevel = true;
	console.log(wizardlevel) // true
}

console.log(wizardlevel) // false ? but it should be true aint't it?

// with let: whenever it is wrapped around inside curly braces, it creates a new scope. 

const obj = {
	player :"suman",
	experience : 210,
	wizardlevel : false
};

// reassigning a constant to other variables give errors
obj = 5; //gives error
// but if we try to change its child element then works fine
obj.player = "ferman";


// -------------------Destructuring-----------------------------
const player = obj.player;
const experience=  obj.experience;

// can also be writte as
const{player,experience} = obj;

let wizardlev = obj.wizardlevel
// can also be written as
let{wizardlevel} = obj;




//--------------Object Properties--------------------
const name = 'john snow';

const obj = {
	[name]: 'hellp',
	['ray'+ 'smith']: 'hihi'
};
//{john snow: "hellp", raysmith: "hihi"}




// ---------------Template strings-----------------------
const name = "suman";
const pet = "dog"
const greeting = "Hello" + name + "Are you doing alright? You've got a lovely" + pet + " . What's its name?";
// prints out "HellosumanAre you doing alright? You've got a lovelydog . What's its name?"

// can now be written as 
const greetings = `Hello ${name} Are you doing alright? You've got a lovely ${pet} what is its name?`;
// output: "Hello Suman Are you doing alright? You've got a lovely dog what is its name?"


// -----------------Default Arguments------------------------

function greet(name = '', age = 30, pet = 'rabbit'){

	return `Hello ${name} Are you doing alright? You've got a lovely ${pet}. I believe it is ${age-28} years old ?`;
}

//greet()
"Hello  Are you doing alright? You've got a lovely rabbit. I believe it is 2 years old ?"

// greet('suman', 32,'horse');
"Hello suman Are you doing alright? You've got a lovely horse. I believe it is 4 years old ?"






// --------------------Javascript Type: Symbol(new in ECMA Script 6)--------------------------------
 let sym1 = Symbol();
 let sym2 = Symbol('foo');
 let sym3 = Symbol('foo');

 //sym2===sym3
false

// ---------------------------arrow functions------------------------------

function add(a,b) {
	return a+b;
}

const add = (a,b) => a+b;






































