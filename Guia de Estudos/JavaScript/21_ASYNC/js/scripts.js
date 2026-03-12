// 1 - setTimeout
/* console.log("Ainda não executou")

setTimeout(function() {
    console.log("Requisição assíncrona")
}, 2000)

console.log("Ainda não executou 2") */

// 2 - setInterval
//console.log("not started yet") 

//setInterval(function(){

    //console.log("asynchronous interval")


//}, 3000); 

//console.log("Not started yet again")

// 3 - Promises
/* 
const promise = Promise.resolve(5 +  5)

console.log("Some Code")

promise
.then((value) => {
    console.log(`The sum is ${value}`);
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Now is ${value}`)); 

console.log("Other Code");

// 4 - Promises Failed
Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Invalided Values")
    }
})
.catch((err) => console.log(`A error occurred: ${err}`)); 
*/

// 5 - Reject Promises
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if(n > 10) {
            resolve(`A number is bigger than 10`)
        } else {
            reject(new Error("The low number")); 
        }
    });
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log(`The result is ${v}`)).catch((err) => console.log(`An error occurred ${err}`));

b.then((v) => console.log(`The result is ${v}`)).catch((err) => console.log(`An error occurred ${err}`));

// 6 - Solve Promises
const p1 =  new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 1000);
});

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) =>  {
    if(30 > 10) {
        resolve(30)
    } else {
        reject("Erro!"); 
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values)); 

// 7 - ASYNC 
async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`); 
});

console.log("teste async"); 

// 8 - Await
function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Solve the Promise");

    }, 2000); 
    });
}

async function CallAsync() {
    console.log("Calling a Promise, and waiting for result")
    const result = await resolveComDelay();
    console.log(`The result comes: ${result}`); 
}

CallAsync(); 

// 9 - Generators
function* generator() {
    yield 1;
    yield 2;
    yield 3; 
}

const gen = generator()

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 