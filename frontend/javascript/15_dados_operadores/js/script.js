// 1 - Numbers
console.log(typeof 2);     // "number" - integers are numbers
console.log(typeof 5.14);  // "number" - floats are numbers too
console.log(typeof -127);  // "number" - negative numbers are numers


// 2 - Arithmetic operations
console.log(2 + 4);   // Addition: 6
console.log(6 - 5);   // Subtraction: 1
console.log(5 * 2);   // Multiplication: 10
console.log(80 / 2);  // Division: 40
console.log(5 + (4 * 2)); // Parentheses: 5 + 8 = 13

// 3 - Special Numbers
console.log(typeof Infinity); // "number" - Infinity is a special numeric value
console.log(-Infinity);       // Negative Infinity
console.log(12 * "fff");      // NaN (Not a Number) because "fff" cannot be multiplied
console.log(typeof NaN);      // "number" - NaN is a numeric type but represents invalid number

// 4 - Strings
console.log("Um texto"); // Simple string
console.log("Mais um texto"); // Another string
console.log("13");            // Numbers inside quotes are strings
console.log(typeof "Um texto"); // "string"
console.log(typeof "Mais um texto"); // "string"

// 5 - Special characters in strings
console.log("Texto em \n Duas linhas"); // \n = newline
console.log("Espaçamento \t de tab"); // \t = tab spacing

// 6 - Concatenation
console.log("Oi," + "tudo", "bem?"); // + joins strings, comma separates arguments
console.log('testando' + 'com' + 'crasel?'); // Multiple concatenations

// 7 - Interpolation - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`); // ${...} evaluates expressions inside string
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`); 
// Executes console.log("teste") inside template literal (prints undefined in interpolation)

// 8 - Booleans
console.log(true);           // true
console.log(5 > 20);         // false
console.log(30 > 10);        // true
console.log(typeof false);   // "boolean"

// 9 - Comparison operators
console.log(5 <= 5);         // true
console.log(5 < 5);          // false
console.log(10 == 10);       // true (equality)
console.log(10 == 9);        // false
console.log(10 != 9);        // true (not equal)

// 10 - Strict vs Loose equality
console.log(9 == "9");       // true - loose equality converts types
console.log(9 + "9");        // "99" - number + string = string concatenation
console.log(9 === "9");      // false - strict equality (no type conversion)
console.log(9 != "9");       // false - loose inequality
console.log(9 !== "9");      // true - strict inequality

// 11 - Logical operators
console.log(true && true);           // true
console.log(true && false);          // false
console.log(5 > 2 && 2 < 10);       // true
console.log(5 > 2 && "Ches" === 1); // false
console.log(5 > 2 || "Ches" === 1); // true
console.log(5 < 2 || 5 > 100);      // false
console.log(!true);                  // false - NOT operator
console.log(!5 > 2);                 // false - !5 converts to false, then false > 2 = false

// 12 - Empty values
console.log(typeof null, typeof undefined); // "object" "undefined"
console.log(null == undefined);    // true - loose equality
console.log(null === undefined);   // false - strict equality
console.log(null == false);        // false
console.log(undefined == false);   // false

// 13 - Type coercion
console.log(5 * null > 0);         // 5*0 = 0; 0 > 0 = false
console.log("teste" * "opa");      // NaN - invalid multiplication
console.log("10" + 1);             // "101" - string concatenation
console.log("10" - 1);             // 9 - string converted to number automatically
