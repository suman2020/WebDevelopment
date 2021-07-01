// Object spread operator

const animals = {

	tiger: 23,
	lion: 5,
	monkey: 2,
	bird: 50
}

const{tiger, ...rest} = animals;

const array = [1,2,3,4,5]
function sum(a,b,c,d,e) {
	return a+b+c+d+e;
}

sum(...array); // 15
sum(1,2,3,4,5);

........................................................
function objectSpread(p1,p2,p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)

}
const {tiger,lion, ...rest} = animals;

objectSpread(tiger,lion,rest);

......................................................
finally(): can be run at the end of the promise
------------------------------------------------------
// for await of : returns promises in order

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const loopThroughUrls = (urls) => {
	for(url of urls){
		console.log(url)
	}
}

const getData2 = async function(){
	const arrayofPromises = urls.map(url => fetch(url));
	for await(let request of arrayofPromises){
		const data = await request.json();
		console.log(data);

	}
}

.............................................................
//   allSettled()

 