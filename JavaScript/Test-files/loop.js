var toDos = [
	"clean room",
	"make dinner",
	"learn javascript",
	"running",
	"call parents",
];

for (var i = 0; i< toDos.length; i++){
	toDos[i] = toDos[i]+'!';
	console.log(toDos[i]);
}

var counter = 0;
while(counter < toDos.length)
{
	console.log(counter);
	counter++;
}

toDos.forEach(function(todo,index){
	console.log(todo,index);
});

// can also be written as 
toDos.forEach(logTodos);

function logTodos(todo,index) {
	console.log(todo,index)
}
