/*
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click",function(){
console.log('CLick');});

var button2 = document.getElementsByTagName("button")[1];
button2.addEventListener("mouseenter",function(){
	console.log('mouseenter');
});

var button3 = document.getElementsByTagName('button')[2];
button3.addEventListener("mouseleave",function(){
	console.log("Mouseleave");
});

*/

var userinput = document.getElementById("userinput");
var button = document.getElementById("enter");

// returns a list of ul elements i.e [li,....]
var ul = document.querySelector("ul");

function inputLength(){

	return userinput.value.length
}

function createListElement()
{
	console.log("Click is working");
	console.log(userinput); //<input id="userinput" type="text" placeholder="Enter items">
	console.log(userinput.value);

	// create a new element
	var li = document.createElement("li");
	var li1 = document.createElement("li");

	//adding text associated with the new element
	
	li1.appendChild(document.createTextNode(userinput.value));

	 // append the list to its parent i.e. unordered list (ul)
	ul.appendChild(li1);
	userinput.value = ""; //resetting the value to empty

	// creation of delbutton for every to-do-list created
	var delbutton = document.createElement("button");

	// add text into the delete buttion
	delbutton.appendChild(document.createTextNode("Delete"));

	delbutton.classList.add("DelClass");
	//add the delete buttons to a specific/comman class called "DelClass"

	li1.appendChild(delbutton); // append the deletebutton to the list
	li1.classList.add("ListClass");

}
function afterClick(){
	if(inputLength() >0)
	{
		createListElement();
	}
}

function afterKeyPress(event){
	if(inputLength() >0 && event.keyCode === 13)
	{
		createListElement();
	}

}

/* 
	Callback functions: afterClick and afterKeyPress ---> instead of afterClick() and afterKeyPress(event)
		When the line of javascript that includes the callback function runs, we don't want the function to run 
		cause we are adding the event listner now to wait for click or keypress. We want to let it know  though
		that we want this action to happen when a click happens. So the function now automatically gets run(adds the function()) 
		everyrime the click happens. So we are passing a reference to the function without running it.

*/
list_elements = document.querySelectorAll("li");

function deleteButtonCreation()
{
	for( i =0; i<list_elements.length;i++)
	{
		element = list_elements[i];
		element.classList.add("ListClass");
		var del_button = document.createElement("button");
		del_button.appendChild(document.createTextNode("Delete"));
		del_button.classList.add("DelClass");
		
		element.appendChild(del_button);


	}

}


function mainTask(event)
{
	if(event.target.tagName === "LI")
	{
		event.target.classList.toggle("done");
	}

	if(event.target.className === "DelClass")
	{
		event.target.parentElement.remove();
	}
	

}
deleteButtonCreation();

ul.addEventListener("click",mainTask);

button.addEventListener("click",afterClick);

userinput.addEventListener("keypress",afterKeyPress);


/////////////////////////////////////////////////////


