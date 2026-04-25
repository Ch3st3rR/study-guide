// 1 - strict
//"use strict";

//opa = "teste";

//const opa = "teste";

//const undefined = 10;

//delete [].length;

// 2 - console.log
let a = 1
let b = 2

if(a == 1) {
    a - b + 2;
}

console.log(a); 

for(let i = 0; i < b; i++) {
    a = a + 2
    console.log(a); 
}

if(a > 5) {
    a = 25;
}

console.log(a); 

// 3 - Debugger
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}

//debugger; 

for(let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop");

//debugger; 

if(c > 5) {
    c = 25; 
}

// 4 - Function (data processing)
function checkNumber(n) {

    const result = Number(n)

    if(Number.isNaN(result)) {
        console.log("Value incorrect!"); 
        return; 
    }

    console.log("Value correct!"); 
    return result; 
}

checkNumber(5)
checkNumber("10"); 
checkNumber({}); 
checkNumber("Test"); 


// 5- Exceptions 
//let x = 10

//if(x != 11) {
    //throw new Error("The value X could cant be different of 11!");
//}

// 6 - Try Catch
try {
    const soma = x + y
} catch(error) {
    console.log(`Programming Error: ${error}`)
}

// 7 - Finally
try {
    const value = checkNumber("asd")

    if(!value) {
        throw new Error("Values Invalided")
    }
} catch(error) {
    console.log(`Ops, have a problem here: ${error}`); 
} finally {
    console.log("The code was executed!"); 
}

// 8 - Assertions
function checkArray(arr) {

    if(arr.length === 0) {
        throw new Error ("The array need to have elements");
    } else {
        console.log(`The array have ${arr.length} elements`);
    }
}

// checkArray([]); 

checkArray([1, 2, 3]); 

