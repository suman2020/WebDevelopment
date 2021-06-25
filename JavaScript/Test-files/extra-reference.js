//-------------- pass by value vs pass by reference-------------------

let a = 5;
let b = a;
b++
console.log(a); // 5
console.log(b);// 6

// a and b are primitive types and are passed by value. 

let obj1 = {name:'suman', password = '21dfa'}
let obj2 = obj1;
obj2.password = 'sumanfspassowrd'

console.log(obj1.password); //   'sumanfspassowrd'
// this is because of pass by reference: pointing to the same memory/


//also arrays are objects and are passed by reference
let arra1 = [1,3,4,5]
let arra2 = arra1;
arra2.push(9);
console.log(arra2); //[1,3,4,5,9]
console.log(arra1); //[1,3,4,5,9]

// but what if we don't want to modify the first array.
let arra2 = [].concat(arra1);
arra2.push(9)
console.log(arra1); // [1,3,4,5]
console.log(arra2); //[1,3,4,5,9]


//Cloning an object
let obj = {a:'a', b: 'b' , c:'c'};
let clone = Object.assign({},obj);
// can also be written as
let clone2= {...obj};

obj.c = 5;

console.log(obj); //{a:'a', b: 'b' , c:5}
console.log(clone);  {a:'a', b: 'b' , c:'c'}
console.log(clone2): {a:'a', b: 'b' , c:'c'};


// further example:
let obj = {a:'a', b: 'b' , c:
	{deep:'try and copy me'}};

obj.c = "heheeh"

let clone = Object.assign({},obj);
// can also be written as
let clone2= {...obj};

console.log(obj); //{a:'a', b: 'b' , c:'hehe'};
console.log(clone); //{a:'a', b: 'b' , c:{deep:'try and copy me'}};
console.log(clone2); //{a:'a', b: 'b' , c:{deep:'try and copy me'}};


But what if we do:
obj.c.deep = 'i am back';
console.log(obj); //{a:'a', b: 'b' , c:{deep:'i am back'}};
console.log(clone);//{a:'a', b: 'b' , c:{deep:'i am back'}};
console.log(clonw2);//{a:'a', b: 'b' , c:{deep:'i am back'}};

// this is called shallow clone cause we had an object as an member itself.

// to deal with this problem, a new solution is introduced

let superClone = JSON.parse(JSON.stringify(obj));
console.log(superClone); //{a:'a', b: 'b' , c:{deep:'try and copy me'}};



//------------Type Coercion--------------------------
https://dorey.github.io/JavaScript-Equality-Table/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

1 === '1'; // false
1 == '1' ; //true: javascript does it for ourself, converts one of the variable to the
other as per necessity

-0 === +0 // true
Object.is(-0,+0)// false