---------------------------Advanced loops---------------------
const basket = ['apples','oranges','kiwis'];
const detailed = {
	apples: 55,
	oranges: 10,
	kiwis:100,
}
-------
for (let i=0; i< basket.length ; i++)
{
	console.log(basket[i])
}


--------
basket.forEach(item=>{
	console.log(item);
})

--------
------------for of ------------
// iterating: arrays, strings

for (item of basket){
	console.log(item);
}


------------for in-------------
// enumerating - objects

for(item in detailed){
	console.log(item)
}
// apples, oranges, kiwis


-------------------Exercises------------------------------------


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let lar_num = arr[0]
	for (num of arr){
		if(num > lar_num){
			lar_num = num;
		}
	}
	return lar_num;

}

function biggestNumberInArray2(arr) {
  let lar_num = 0;
  for (item of arr) {
    if (lar_num < item) {
      lar_num = item;
    }
  }
  return lar_num;
}



function biggestNumberInArray3(arr) {
 let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
	for (item in basket)
	{
		if(item===lookingFor)
		{
			return `${lookingFor} is in the basket`
		}

	}
	return "the item is not in the basket"

}