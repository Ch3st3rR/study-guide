// 1 - Creating a function
// This is a basic function declaration.
function minhaFuncao() {
    console.log("testando"); // Prints "testando" to the console
}

// Calling the function multiple times
minhaFuncao(); 
minhaFuncao(); 

// Function assigned to a variable (function expression)
const minhaFuncaoEmVariavel = function () {
    console.log("Function em Value"); // Prints "Function em Value"
}

// Call the function stored in the variable
minhaFuncaoEmVariavel(); 

// Function with a parameter
function funcaoComParametro(txt) {
    console.log(`Printing ${txt}`); // Prints "Printing" followed by the parameter value
}

funcaoComParametro("Printing something");
funcaoComParametro("Another function");

// 2 - Functions with return values
const a = 10
const b = 20
const c = 30
const d = 40

// Function that returns the sum of two numbers
function soma(n1, n2) {
    return n1 + n2; 
}

// Storing the returned value in a variable
const resultado = soma(a, b)
console.log(resultado); // Prints 30

// Directly printing the returned value
console.log(soma(c, d)); // Prints 70

// 3 - Scope
let y = 10 // Global variable

function testandoEscopo() {
    let y = 20 // Local variable inside function
    console.log(`Y inside the function is: ${y}`); 
}

testandoEscopo(); // Prints 20

console.log(`Y outside the function is: ${y}`); // Prints 10

testandoEscopo(); // Prints 20 again

// 4 - Nested Scopes
let m = 10 // Global variable

function escopoAninhado() {
    let m = 20 // Function-level variable

    if(true) {
        let m = 30 // Block-level variable

        if(true) {
            let m = 40 // Nested block-level variable
            console.log(m) // Prints 40
        }
        console.log(m); // Prints 30
    }
    console.log(m); // Prints 20
}

escopoAninhado();
console.log(m); // Prints 10 (global)

// 5 - Arrow functions
const testArrow = () => {
    console.log("This is an arrow function"); 
}; 

testArrow(); // Calls the arrow function

// Function to check if a number is even or odd
const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Even")
        return
    }
    console.log("Odd"); 
};

parOuImpar(5); // Prints "Odd"
parOuImpar(6); // Prints "Even"

// 6 - More Arrow functions
const raizQuadrada = (x) => {
    return x * x
};

console.log(raizQuadrada(4)); // Prints 16

// Shorter version of the same function
const raizQuadrada2 = (x) => x * x
console.log(raizQuadrada2(5)); // Prints 25

console.log(raizQuadrada(12)); // Prints 144

// Arrow function with no parameters
const helloWorld = () => console.log("Hello World!"); 
helloWorld(); // Prints "Hello World!"

// 7 - Optional parameters
const multiplication = function(m, n) {
    if(n === undefined) { // Check if the second parameter is missing
        return m * 2
    } else {
        return m * n
    }
}

console.log(multiplication(5)); // Prints 10
console.log(multiplication(2, 4)); // Prints 8

const greeting = (name) => {
    if(!name) { // If no name is provided
        console.log("Hello!")
        return
    }
    console.log(`Hello ${name}`);
};

greeting(); // Prints "Hello!"
greeting("Ches"); // Prints "Hello Ches"

// 8 - Default values
const customGreeting = (name, greet = "Hello!") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Ches")) // Prints "Hello!, Ches!"
console.log(customGreeting("Bobos", "Good Morning")); // Prints "Good Morning, Bobos!"

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text); 
    }
};

repeatText("Testing"); // Prints "Testing" twice
repeatText("And now repeat 5 times", 5); // Prints the text 5 times

// 9 - Closure
function someFunction() {
    let txt = "Something" // Local variable
    function display() {
        console.log(txt) // Inner function has access to outer variable
    }
    display()
}

someFunction(); // Prints "Something"

// 10 - More about closure
const mmultiplicationClosure = (n) => {
    return (m) => {
        return n * m; // Inner function multiplies by n
    };
};

const c1 = mmultiplicationClosure(5) // n = 5
const c2 = mmultiplicationClosure(10) // n = 10

console.log(c1(5)); // Prints 25
console.log(c2(10)); // Prints 100

// 11 - Recursion
const untilTen = (n, m) => {
    if(n < 10) {
        console.log("The function stopped executing!")
    } else {
        const x = n - m 
        console.log(x)
        untilTen(x, m) // Calls itself
    }
}

untilTen(100, 7) // Recursive function call

// Factorial using recursion
function factorial(x) {
    if(x === 0) { // Base case
        return 1
    } else {
        return x * factorial(x - 1) // Recursive call
    }
}

const num = 6
const result = factorial(num)
console.log(`The factorial of ${num} is ${result}`); // Prints 720
