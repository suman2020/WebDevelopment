/* map filter and reduce*/

const array = [1,2,6,19];
const double = []

const newArray = array.forEach((num) => {
	double.push(num *2);
})

console.log(newArray); 

// map:

const mapArray = array.map(num=>{
	return num*2
}); // loops over each element and returns a new array, doesnot affect the previous array


const mapArray = array.map((num) => num*2);
Note: when we have a single parameter we can omit the arrow as:
const mapArray = array.map(num => num *2);
console.log("map", mapArray);

// filter

const filterArray = array.filter(num => {
	return num >5 ;
})
const filterArray = array.filter(num => num>5) // returns a new array of element greater than 5


// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator  + num
}, 0) // accumulator stores the information from previous execution

const reduceArray =array.reduce((accumulator,num) => accumulator+num, 0);  // 0 is the starting value for accumulator
console.log('reduce', reduceArray) // 29

https://sdras.github.io/array-explorer/