const express = require('express');

const app = express()

 // .......................................Middleware........................
app.use((req,res,next) =>{
	console.log("<h1> helllo </h1>");
	next();
})

app.get('/',(req,res)=>{
	// res.send("helllo");
	// res.send("<h1> helllo </h1>")

	const user = {
		name: "suman",
		hobby: 'soccer'
	}
	res.send(user);
});
app.get('/profile',(req,res)=>{
	res.send("Getting profile")
})
app.listen(3000);


//
