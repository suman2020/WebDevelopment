/*
importing objcts from another script
const script2 = require('./script2.js');
*/

// another way of imporing from another script
// npm init: creates a package.json file and we must manually add "type": "module " in there

import {largenumber} from './script2.js';



// const a = script2.largenumber;
const a = largenumber;
const b = 21;

setTimeout(() =>{
	console.log(a+b);
},1000)


// console.log(__dirname); // gives the current directory


// touch scriptname: create a new script
// node scriptname: run the script
// process.exit(): exit the server


// In browser environment:

//	globalThis === window  (true)

// But window is not defined on the node server. Node version of window object is global (window === global in node)

// globalThis now exists in node server as well
// globalThis === global 
