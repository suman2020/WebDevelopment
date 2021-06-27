----------------ES 2020-----------------

......................Big Int................................

Number.MAX_SAFE_INTEGER : 9007199254740991
1n + 3n = 4n
9007199254740991n + 10n =  9007199254741001n




................Optional Chaining Operator ?. ...............

let pokeman = {
	pika: {
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9
	}
}
let weight = pokeman.pika.weight
console.log('weight', weight) // 0.9


let suman_pokeman = {
	dino :{
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9
	}
}

let weight2 = suman_pokeman?.pika?.weight
console.log(weight2); // undefined

weight1 = pokeman?.pika?.weight
console.log(weight1) // 0.9



................Nullish Coalescing Operator ?? (can be used instead of OR ||)...............

let suman_pokeman = {
	dino :{
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9,
		power: 'fire',
	}
};
let power = suman_pokeman?.dino?.power;
console.log(power); // gives 'fire'

-------------------
let suman_pokeman = {
	dino :{
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9,
		
		}
};

let power = suman_pokeman?.dino?.power;
console.log(power); // displays undefined
.......................................
let power = suman_pokeman?.dino?.power || 'no power property';
console.log(power); // displays 'no power property'

------------------------------------------
let suman_pokeman = {
	dino :{
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9,
		power : 0
		}
};
let power = suman_pokeman?.dino?.power || 'no power property';
console.log(power); // displays 'no power property'

------------------------------------------------

let suman_pokeman = {
	dino :{
		species: 'Mouse Pokeman',
		height: 0.2,
		weight: 0.9,
		power : 0
		}
};
let power = suman_pokeman?.dino?.power ?? 'no power property';
console.log(power); // displays 0 

 || : returns if the value is false or 0 or null or undefined
 ?? : checks if value is not or undefined




................Promise.allSettled...........................


.................globalThis..................................




....................debugger tool...................................
const flattened = [[0,10],[2,3],[4,5]].reduce((accumulator, array)=>{
debugger;
return accumulator.concat(array)},[]);