/*
------------------------RESTful APIs-----------------------
 	> A REST API defines a set of functions which developers can perform requests and receive responses
 	  via a HTTP protocol such as GET, POST, PUT, DELETE - 

 	> With RESTful API, we are able to create an API that is RESTful somethign that follows the rules that everybody can agree on 
 	  so that we have compatibilty between different systems

 	> A RESTful API : GET -> to receive a resource
 					  PUT -> to change the state or update the resource
 					  POST -> to create a resource
 					  DELETE -> to delete the resource

*/
const express = require('express');

const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req,res) =>{
	// req.query
	console.log(req.query);
/*
		http://localhost:3000/?name=suman&age=23
		Output: { name: 'suman', age: '23' }


*/
	// req.body
	// req.header
	console.log(req.header)
	// req.params
	res.send("Getting root");
});

app.listen(3000);

