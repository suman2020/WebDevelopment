var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeBackgroundColor()
{
	body.style.background = "linear-gradient(to right, "+ color1.value + ","+ color2.value + ")";

	css.textContent = body.style.background + ";" ;

}

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input", changeBackgroundColor);

function randomNumber()
{
	return Math.floor(Math.random()*256);
}

function RandomColorGenerator()
{
	body.style.background = "linear-gradient(to right, "+ "rgba("+ randomNumber() + "," + randomNumber()+ ","+  randomNumber() + ")";
}
var button = document.createElement("button");
button.appendChild(document.createTextNode("RANDOM COLOR"));
body.appendChild(button);
button.addEventListener("click", RandomColorGenerator);
