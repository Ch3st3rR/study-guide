// arithmetic operators = operands (values, variables, etc.)
// operators (+ - * /)
// ex. 11 = x + 5; 

let students = 30;

//students = students + 1; 
//students = students - 1; 
//students = students * 2;
//students = students / 2;
//students = students ** 3; 
//students = students % 3;
//let extraStudents = students % 3;


//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++; 
//students--;

/*  
    operator precedence
    1. parenthesis ()
    2. exponents
    3.  multiplication & division & modulo
    4. addition & subtraction
*/

// ex . let result = 1 + 2 * 3 + 4 ** 2; 
let result = 6 / 2 ** (2 + 5); 

console.log(result); 


console.log(students);

/*💡 Dica de dev front-end (importante)

Use +=, ++, -- sempre que possível → código mais limpo

Use parênteses mesmo quando “acha que sabe a ordem” → evita bugs

% é MUITO usado para:

verificar par / ímpar

dividir itens em colunas

lógica de grids e layouts */

