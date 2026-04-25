// 1 - Variables
let nome = "Ches"; // 'let' allows reassignment
console.log(nome); // Prints: Ches
console.log("Ches"); // Prints: Ches

nome = "Ches Fern"; // Reassigning a new value
console.log(nome); // Prints: Ches Fern

const idade = 19; // 'const' cannot be reassigned
console.log(idade); // Prints: 19
// idade = 20; // ❌ This would cause an error

console.log(typeof nome); // Prints: string
console.log(typeof idade); // Prints: number

// 2 - More about variables
// Invalid variable names examples (commented out)
// let @teste = "invalid"; 
// let 2teste = "invalid";

let a = 10, b = 20, c = 30; // Multiple variable declarations in one line
console.log(a, b, c); // Prints: 10 20 30

const nomecompleto = "Ches Fernanda Weidt"; // camelCase
const nomeCompleto = "Spark Jilson"; // Different variable, case-sensitive
console.log(nomecompleto); // Ches Fernanda Weidt
console.log(nomeCompleto);   // Spark Jilson

// Variables can start with _ or $
let _teste = "ok"
let $teste = "ok"; 
console.log(_teste, $teste); // ok ok

// 3 - Prompt (commented out)
// const age = prompt("Enter your age");
// console.log(`You are ${age} years old`);

// 4 - Alert (commented out)
// alert("Testing");
// alert(`The number is ${z}`);

// 5 - Math object
console.log(Math.max(5, 2, 1, 10)); // Returns the max value: 10
console.log(Math.floor(5.14)); // Rounds down: 5
console.log(Math.ceil(5.14));  // Rounds up: 6

// 6 - Console methods
console.log("test!"); // Normal message
console.error("error!"); // Error message
console.warn("warning!"); // Warning message

// 7 - if statement
const m = 10;
if(m > 5) {
    console.log("M is greater than 5!"); // True, prints this
}

const user = "John";
if(user === "John") {
    console.log("Hello John!"); // Prints Hello John!
}
if(user === "Maria") {
    console.log("Hello Maria!"); // False, does not print
}

console.log(user === "John", user === "Maria"); // true false

// 8 - else
const loggedIn = false;
if(loggedIn) {
    console.log("User is logged in!");
} else {
    console.log("User is NOT logged in!"); // Prints this
}

const q = 10;
const w = 15;
if(q > 5 && w > 20) {
    console.log("Both numbers are higher than threshold");
} else {
    console.log("Numbers are not high enough"); // Prints this
}

// 9 - else if
if (1 > 2) {
    console.log("Test");
} else if (2 > 3) {
    console.log("Test 2");
} else if (5 > 1) {
    console.log("Now it works!"); // Prints this
}

const username = "Ches";
const userAge = 19;

if(username === "Ches") {
    console.log("Welcome Ches!"); // Prints this
} else if(username === "Ches" && userAge === 19) {
    console.log("Hello Ches, you are 19 years old");
} else {
    console.log("FUCK YOU BOBOLOTOLO!!!");
}

// 10 - while loop
let p = 0;
while(p < 5) {
    console.log(`Repeating ${p}`); // Prints 0 to 4
    p = p + 1; 
}

// Infinite loop (commented out)
// let x = 10
// while(x > 5) {
//     console.log(`Printing ${x}`)
// }

// 11 - do while loop
let o = 10;
do {
    console.log(`Value of o: ${o}`); // Prints 10 down to 2
    o--;
} while(o > 1);

// 12 - for loop (examples commented out)
// for(let t = 0; t < 10; t++) { console.log("Repeating something..."); }

// 13 - Indentation example
// Proper indentation is key for readability
// for(let u = 0; u < 10; u++) {
//     if(u * 2 > 10) {
//         console.log(`Greater than 10! ${u}`);
//     } else {
//         if(u / 2 == 0) {
//             console.log("Divisible by 2")
//         }
//     }
// }

// 14 - break statement
// Stops the loop when condition is met
// for(let g = 20; g > 10; g--) {
//     console.log(`Value of g: ${g}`);
//     if(g === 12) { 
//         console.log("g is 12!");
//         break; 
//     }
// }

// 15 - continue statement
// Skips the current iteration (commented out)
// for(let s = 0; s < 10; s = s + 1) {
//     if(s % 2 === 0) {
//         console.log("Even number!");
//         continue; 
//     }
//     console.log(s); 
// }

// 16 - switch statement
const job = "Bumbum";
switch(job) {
    case "Doctor kk": 
        console.log("You are a little doctor!"); 
        break;
    case "Bumbum":
        console.log("You have a Bumbum!"); 
        break;
    case "Avestruz":
        console.log("You are an ostrich!"); 
        break;
    default:
        console.log("Job not found"); 
}

// Example without breaks
const L = 100;
switch(1) {
    case 200:
        console.log("L is 200!");
    case 100:
        console.log("L is 100!"); // Will execute
    case 50:
        console.log("L is 50!");
    default:
        console.log("L not found"); 
}
// ⚠️ Without break, all cases below the matched one run. Always remember break!






