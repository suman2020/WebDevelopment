......................Promises.........................
- used for handling asynchronous computations
- A promise object is simply a wrapper around a value that(value) may or may not be known when the object is instantiated 
	and provides a method for handling value after it is known (resolved) or is unavailable(rejected) for a failure reason

........................................................................................................................

var currentTime = new Date();
console.log('The current Time is: ' + currentTime);

// can also be written as:

function getCurrentTime(){
	return setTimeout(function() {
		var currentTime = new Date();
		callback(currentTime);
	},2000)
}
........................................................................................................................

TO BE CONTINUED :https://www.newline.co/fullstack-react/30-days-of-react/day-15/

--------------------------------------------------------------------------------------------------------------------------

const promise = new Promise((resolve,reject)=>{
	if(true){
		resolve('Stuff worked');
	}
	else{
		reject('Error, it broke');
	}
})

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.then(result3 => result3 + '$' )
	.then(result4 => {
		console.log(result4);
	})
	.catch()=>console.log('Error!')





const promise2 = new Promise((resolve,reject) =>{
	setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve,reject) =>{
	setTimeout(resolve, 1000,'Hey there')
})

const promise4 = new Promise((resolve,reject) =>{
	setTimeout(resolve, 3000, 'You looking for me')
})


Promise.all([promise,promise2,promise3,promise4])
	.then(value => {
	console.log(value);
})

// 
[
    "Stuff worked",
    "HIII",
    "Hey there",
    "You looking for me"
]


...........................................................................
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url =>{
	return fetch(url).then(resp => resp.json())}))
	.then(results =>{
	console.log(result[0])
	console.log(result[1])
	console.log(result[3])
})

.......................................Exercise................................
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
	const promise = new Promise((resolve,reject) => {
		setTimeout(resolve, 4000, 'Success')
	} )

// #2) Run the above promise and make it console.log "success"
	promise.then(console.log)

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
	const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?