
const fs = require('fs')// filesystem

//READ
fs.readFile('./hello.txt',(err,data)=>{ // read the file asynchronoulsy
	console.time('total_execution_time')
	if(err){
		console.log(err);

	}
	console.log('1 Async', data.toString('utf8'));// uses the encoding utf8 by default
	console.timeEnd('total_execution_time')
})

const file = fs.readFileSync('./hello.txt');  // read the file synchronously
console.log('2 Sync',file.toString())


// APPEND
fs.appendFile('./hello.txt',' This is nnot soo cool ', err => {
	if(err){
		console.log(err);
	}
})


//WRITE
fs.writeFile('./bye.txt', 'Sad to see you go', err =>{
	if(err){
		console.log(err);
	}
})

//DELETE
fs.unlink('./bye.txt', err=>{
	if(err){
		console.log(err)
	}
	console.log('Inception')
})


