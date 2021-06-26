----------------flat()---------------

const array = [1,2,3,4,5]
array.flat(); //  [1,2,3,4,5]

const array2 = [1,[2,3],[4,5,6,7]];
array2.flat(); // [1,2,3,4,5,6,7]

const array3 = [1,2,[3,4,[5,6]],7];
array3.flat();  //[1, 2, 3, 4, Array(2), 7]
array3.flat(2);// [1,2,3,4,5,6,7]


const entries = ['suman','thapa',,,,,,'magar'];
entries.flat(); // ['suman','thapa','magar']


---------------------trimStart()-------------------

const email1 = '             magarsuman2020@gmail.com'
email1.trimStart();



-------------------trimEnd()-------------------------
const email2 = 'magarsuman2018@gmail.com            '
email2.trimEnd()



--------------------fromEntries():array to obects--------
const userProfiles = [['suamn',34],['magar',20],['thapa',67]];
object11 = Object.fromEntries(userProfiles)
// {suamn: 34, magar: 20, thapa: 67}

objext2 = Object.entries(object11);
// [['suamn',34],['magar',20],['thapa',67]];



---------------------try catch---------------------
try{
	suman + 'h1'
}
catch(error){
	console.log("something is missing "+ error);
}