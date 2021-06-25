// ---------------------Advanced Functions--------------------------//
// old way of defining functions
function first(){
	var greet = 'Hi';
	function second(){
		alert(greet);
	}
	return second;

}

var newFunc = first();
newFunc();


// new way to define function

const first = () => {
	const greet = 'Hi';
	const second = () =>{
		alert(greet);
	}
	return second;

}
const newFunc = first();
newFunc();

/* Closures:
	a function ran and got executed. its never going to be executed again but its going to remember that there are references to those variables 
	so the child scope always has acess to the parent scope.
*/

/* Currying:*/
const multiply = (a,b) => a * b;
const curryMultiplication = (a) => (b) => a * b;
curryMultiplication(3)(4)

/* Compose: act of putting two functions together to form a third function where the output of one function is the input of other*/

const compose = (f,g) => (a) = f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);  // return 7

