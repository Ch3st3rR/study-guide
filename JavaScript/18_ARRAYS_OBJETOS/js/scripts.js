//1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Ches", true, 2, 4.12, []];

console.log(itens);

//Exercise - 1
const list = [10, 20, 30, 40, 50];

console.log(list);

console.log(typeof list);

const things = ["Andersson", true, 20, 40.13, []];

console.log(things);

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[83]);

//Exercise - 2
const words = ["hello", "world!"];
console.log(words[10]);
console.log(words[20]);
console.log(words[30]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Ches";

console.log(myName.length);

//Exercise - 3
const random = [500, 300, 400];
console.log(numbers.length);
console.log(numbers["length"]);

const yourName = "Jessica";
console.log(yourName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "some text lmao";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

//Exercise - 4
const otherThings = ["W", "T", "F"];
const allLetters = numbers.concat(otherThings);
console.log(allLetters);
const texto = "hello!!!";

console.log(texto.toUpperCase());
console.log(texto.indexOf("i"));

// 5 - Objects
const person = {
  name: "Ches",
  age: 19,
  job: "Programmer",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

//Exercise - 5
const people = {
  name: "John",
  age: 16,
  job: "Engineer",
};

console.log(people);

console.log(people.name);

console.log(people.name.length);

console.log(typeof people);

//6 - Propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

//Exercise - 6

const house = {
  altura: 1.5,
  largura: 30,
  modelo: "madeira",
};

console.log(house);
house.doors = 8;
console.log(house);
delete house.largura;
console.log(house);

//7 - Objetos (mais sobre)
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

//Exercises - 7
const objeto = {
  a: "test",
  b: true,
};

console.log(objeto instanceof Object);

const objeto2 = {
  c: [],
};

Object.assign(objeto2, objeto);
console.log(objeto2);
console.log(objeto);

//8 - Objetos 2 (conheça melhor sobre)
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

//Exercises - 8
console.log(Object.keys(objeto));
console.log(Object.keys(objeto2));
console.log(Object.keys(house));

console.log(Object.entries(house));

//9 - Mutação (Mutability)
const a = {
  name: "Ches",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 19;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//Exercises - 9
const a = {
  name: "Chester",
};

const z = a;

console.log(a);
console.log(z);

console.log(a === z);

a.altura = 1.83;

console.log(a);
console.log(z);

delete z.altura;

console.log(a);
console.log(z);

//10 - Loops em Arrays
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

//Exercises - 10
const user = ["Pedrao"];

for (let i = 0; i < user.length; i++) {
  console.log(`listing user: ${user[i]}`);
}

//Perfeito pra loop clássico for. Mais tarde, você pode experimentar for...of ou forEach que deixam o código mais limpo:

//user.forEach(u => console.log(`listing user: ${u}`));

// 11 - Push e Pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

//Exercises - 11
const aray = ["h", "i"];

aray.push("hi!");

console.log(aray);
console.log(aray.length);
aray.pop();
console.log(aray);

const itemremoved = aray.pop();

console.log(itemremoved);
console.log(aray);
aray.push("b", "y", "e");

console.log(aray);

//12 - Shift e Unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

//Exercises - 12
const letras = ["a", "b", "c"];

const letra = letras.shift();
console.log(letra);
console.log(letras);

letras.unshift("p", "q", "r");
letras.unshift("z");

console.log(letras);

//13 - IndexOf e LastIndexOf
const myElements = ["Morango", "Maçã", "Acabate", "Pêra"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Acabate"));
console.log(myElements.indexOf("Pêra"));
console.log(myElements.indexOf("Morango"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Acabate")]);

console.log(myElements.lastIndexOf("Acabate"));

console.log(myElements.lastIndexOf("Mamão"));

console.log(myElements.lastIndexOf("Mamão"));

//Exercises - 13
const myElementos = ["batata", "alface", "arroz"];

console.log(myElementos.indexOf("arroz"));
console.log(myElementos.indexOf("alface"));
console.log(myElementos.indexOf("batata"));

console.log(myElementos[3]);
console.log(myElementos[myElementos.indexOf("alface")]);

console.log(myElementos.lastIndexOf("batata"));
console.log(myElementos.lastIndexOf("alface"));
console.log(myElementos.lastIndexOf("arroz"));

//14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

//Exercises - 14
const testeSlicezin = [1, 2, 3, 4, 5, 6, 7];

const subAlay = testeSlicezin.slice(2, 3);

console.log(subAlay);
console.log(testeSlicezin);

const subAlay2 = testeSlicezin.slice(2, 3 / 1);
console.log(subAlay2);

const subAlay3 = testeSlicezin.slice(11, 22);
console.log(subAlay3);

const subAlay4 = testeSlicezin.slice(4);
console.log(subAlay4);

//15 - forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

//Exercises - 15
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numerozin) => {
  console.log(`The number is ${numerozin}`);
});

const postos = [
  { title: "Primeiro posto", category: "Ipiranga" },
  { title: "Segundo posto", category: "Sapeca" },
  { title: "Terceiro posto", category: "Postão do Sexo" },
];

postos.forEach((posto) => {
  console.log(`Exibindo posto: ${posto.title}, Category: ${posto.category}`);
});

//16 - Includes
const brands = ["BMW", "VW", "Fiat"]; 

console.log(brands.includes("Fiat")); 

console.log(brands.includes("KIA")); 

if(brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

//Exercises - 16
const types = ["Design", "Developer", "Gamer"]; 

console.log(types.includes("Design")); 

console.log(types.includes("Developer")); 

if(types.includes("Design")) {
  console.log("Temos vaga pra designer!"); 
}

//17 - Reverse
const reversetest = [1, 2, 3, 4, 5]

reversetest.reverse(); 

console.log(reversetest); 

//Exercise - 17
const reverseTest = [50, 40, 30, 20, 10]

reverseTest.reserve(); 

console.log(reverseTest); 

//18 - Trim
const trimTest = " testing /n "

console.log(trimTest); 

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length); 

//Exercise - 18
const AmmaTest = " I am a test /n"

console.log(AmmaTest); 
console.log(AmmaTest.trim());
console.log(AmmaTest.length); 
console.log(AmmaTest.trim().length); 

// 19 - PadStart
const testPadStart = "1"

const newNumber = testPadStart.padStart(4, "0"); 

console.log(testPadStart); 

console.log(newNumber); 

const testPadEnd = newNumber.padEnd(10, "0");

console.log(testPadEnd); 

//Exercise - 19
const AmmaPadStart = "13"
const newCalculation = AmmaPadStart.padStart(14, "4");

console.log(AmmaPadStart);
console.log(newCalculation); 

const EndCalculation = AmmaPadStart.padEnd(15, "3");
console.log(EndCalculation);

// 20 - Split
const phrase = "The rat gnawed the clothes of the king Rome"

const arrayOfPhrase = phrase.split(" "); 

console.log(arrayOfPhrase); 

//Exercise - 20
const Words = "Words"

const arrayofWord = Words.split(""); 

console.log(arrayofWord); 

// 21 - Join
const PhraseAgain = arrayOfPhrase.join(" ");

console.log(PhraseAgain); 

const ItensForBuy = ["Mouse", "Keyboard", "Monitor"]

const PurchasePhrase = `We need to buy: ${ItensForBuy.join(", ")}.`; 

console.log(PurchasePhrase); 

//Exercise - 21
const WordsAgain = arrayofWord.join(" "); 

console.log(WordsAgain); 

const ItensForPrepareaLife = ["Water", "Clothes", "Computer"]

const PurchaseItens = `Im gonna buy ${ItensForPrepareaLife.join(", ")}.`; 

//22 - Repeat
const word = "testing ";

console.log(word.testing(5)); 

//Exercise - 22
const palavra = "Testando "; 

console.log(palavra.Testando(5)); 

//23 - Rest Operator | Rest Parameters
const InfiniteSum = (...args) => {

  let total = 0

  for(let i = 0; i < args.length; i++) {

       total += args[i]; 

  }
  return total;

};

console.log(InfiniteSum(1, 2, 3));

console.log(InfiniteSum(1, 20, 30, 40, 54, 3942394838943, 98434893943894)); 

//Exercise - 23
const InfinitaSoma = (...numbers) => {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; 
  }
  return total;
}; 

//24 - for...of
const InfiniteSum2 = (...args) => {
  let total = 0;

  for(const num of args) {
    total += num;
  }

  return total; 
 };

 console.log(InfiniteSum2(1, 2, 4))

 console.log(InfiniteSum2(5, 6, 1, 23, 5, 6)); 

 //Exercise - 24
const InfinitaSoma2 = (...numbers) => {
  let total = 0; 

  for(const num of numbers) {
    total+= num; 

  }
  return total; 
};

console.log(InfinitaSoma2(67676, 7676, 545)); 

console.log(InfinitaSoma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 


 //25 - Destructuring
 const userDetails = {
  firstName: "Ches", 
  lastname: "Weidt",
  job: "Programmer",  
 }

 const {firstName, lastName, job} = userDetails

 console.log(firstName, lastName, job); 

 // Rename variables
 const {firstName: nameFirst } = userDetails;
 
 console.log(firstName); 

 //Exercise - 25
const UserInfos = {
  firstName: "Ches",
  lastName: "Weidt",
  age: 19,
  skills: ["Photoshop", "HTML", "CSS", "Illustrator"],
}

const {firstname, lastname, age, skills} = UserInfos; 
  console.log(firstname, lastname, age, skills); 

  // Rename variables 
  const {age: YearsOld} = UserInfos; 
 console.log(YearsOld);


 //26 - Destructing - Arrays
 const myList = ["Airlane", "Submarine", "Car", "Tractor"];

 const [vehiculeA, vehiculeB, VehiculeC] = myList;

 console.log(vehiculeA, vehiculeB, VehiculeC); 

 //Exercise - 26
 const LIST = ["Avião", "Navio", "Carro", "Trator"]; 

 const [VeiculoA, VeiculoB, VeiculoC] = LIST;

console.log(VeiculoA, VeiculoB, VeiculoC);


 // 27 - JSON
 const myJson =  '{"name": "Ches", "age": "19", "skills": ["Photoshop", "HTML", "CSS", "Illustrator"]}'; 

 // 28 - JSON for object and object for JSON
 const myObject = JSON.parse(myJson);

 console.log(myObject); 

 console.log(myObject.name)

 console.log(typeof myObject); 

 //json invalid
 const badJson = '{"name": "Ches", "age": "19"}'

 // const myBadObject = JSON.parse(badJson); 

myObject.isOpenToWork = true;

console.log(myObject); 

const myNewJson = JSON.stringify(myObject)

console.log(typeof myNewJson); 

// EXERCISE - JSON

const JSON_STRING = '{"Nome": "Ches", "Idade": "19", "skills": ["Photoshop", "HTML", "CSS", "Illustrator"]}'; 

const Objetivo = JSON.parse(JSON_STRING); 

console.log(Objetivo); 
console.log(Objetivo.Nome); 
console.log(typeof Objetivo); 

Objetivo.isOpenToWork = true;

const MeuJSON = JSON.stringify(Objetivo);

console.log(MeuJSON); 
console.log(typeof MeuJSON); 

