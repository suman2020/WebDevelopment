
// -----------includes----------------
'Helllooo'.includes('o'); // true

const pets = ['cat','bat','rabbit'];
pets.includes('dog'); //false


// --------------------------exponential------------
const square = (x)=> x**2;

square(45);


// -----------string padding-------------
'Turtle'.padStart(10);
//"    Turtle"
'SumanTha'.padStart(10);
//"  SumanTha"
'Magar'.padEnd(10);
//"Magar     "
'SumanMagar'.padEnd(10);
//"SumanMagar"



//---------------Object methods-----------
Object.values
Object.entries
Object.keys

let obj = {
	username: 'suman2020',
	usrename1: 'ferman20210',
	username2: 'alsu2027',
}
....................................................keys
Object.keys(obj); //returns an array of keys ;[username,username1,  username2]

Object.keys(obj).forEach((key,index)=>{
	console.log(key, obj[key]);

})
username suman2020
usrename1 ferman20210
username2 alsu2027


........................................................values
Object.values(obj).forEach(value => {
	console.log(value);
})
suman2020
ferman20210
alsu2027

..........................................................entries

Object.entries(obj).forEach(entry =>{
	console.log(entry);
});

[['username', 'suman2020'],['username2','ferman20210'],['username2','alsu2027']]


............................................................entries extension
Object.entries(obj).map(value => {
	return value[1]+value[0].replace('username','')

})

["suman2020", "ferman20210usrename1", "alsu20272"]