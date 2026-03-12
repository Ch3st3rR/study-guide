// 1 - METHODS

const animal = {
  name: "baba",
  bark: function () {
    console.log("Bang Bang");
  },
};

console.log(animal.name);
animal.bark();


// Exercise - 1

const guy = {
  name: "Doug",
  bark: function () {
    console.log("Medic");
  },
};

guy.bark();


// 2 - MORE METHODS
const person = {
  name: "Ches",
  getName: function () {
    return this.name;
  },

  setName: function (newName) {
    this.name = newName;
  },
};

console.log(person.name);
console.log(person.getName());

person.setName("ChesLara");
console.log(person.getName());


// Exercise - 2
const shop = {
  name: "Vans",
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  }
};

console.log(shop.name);
console.log(shop.getName());

shop.setName("Vans Store");
console.log(shop.getName());


// 3 - Prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));


// Exercise - 3
const context = "idk";
console.log(Object.getPrototypeOf(context));

const what = true;
console.log(Object.getPrototypeOf(what));

const yep = [];
console.log(yep.length);
console.log(Object.getPrototypeOf(yep));


// 4 - More Prototype
const myObject = {
  a: "b"
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);


// Exercise - 4
const yourObject = {
  phrase: "I don't understand what you are talking about, sorry."
};

console.log(Object.getPrototypeOf(yourObject));

const yourSecondObject = Object.create(yourObject);

console.log(yourSecondObject.phrase);
console.log(Object.getPrototypeOf(yourSecondObject) === yourObject);


// 5 - Basic classes (prototype inheritance)
const cat = {
  race: null,
  paws: 4
};

const germanCat = Object.create(cat);
germanCat.race = "German Guy";

console.log(germanCat);
console.log(germanCat.paws);

const catmania = Object.create(cat);
catmania.race = "CatMania";

console.log(catmania);


// Exercise - 5
const peopleBase = {
  nationality: null,
  parts: 4
};

const brazilianPerson = Object.create(peopleBase);
brazilianPerson.nationality = "Brazilian Person";

console.log(brazilianPerson);
console.log(brazilianPerson.parts);

const japanesePerson = Object.create(peopleBase);
japanesePerson.nationality = "Japanese BR";

console.log(japanesePerson.nationality);


// 6 - Based on constructor functions
function CreateDog(name, race) {
  const dog = Object.create({});
  dog.name = name;
  dog.race = race;
  return dog;
}

const Say = CreateDog("Say", "The GRANDE SAIA");
console.log(Say);

const Mike = CreateDog("Mike", "SpanGuy");
console.log(Mike);
console.log(Object.getPrototypeOf(Mike));


// 7 - Classes based on functions
function Popo(name, race) {
  this.name = name;
  this.race = race;
}

const Bambi = new Popo("Maskow", "Bambi");
console.log(Bambi);


// 8 - Methods with prototype
Popo.prototype.uivar = function () {
  console.log("BAbabababababa");
};

console.log(Popo.prototype);
Bambi.uivar();


// 9 - Classes ES6
class DogClass {
  constructor(name, race) {
    this.name = name;
    this.race = race;
  }
}

const Bob = new DogClass("Bob", "Labrador");
console.log(Bob);
console.log(Object.getPrototypeOf(Bob));


// 10 - More about Classes
class Track {
  constructor(eixos, color) {
    this.eixos = eixos;
    this.color = color;
  }

  subscribeTrack() {
    console.log(
      `This track has ${this.eixos} eixos and its color is ${this.color}`
    );
  }
}

const scania = new Track(6, "Purple");
console.log(scania);
scania.subscribeTrack();

//Track.motor = 4

//const c2 = new Track(4, "Black"); 

//console.log(c2); 

//console.log(c2.motor); 

//Track.prototype.motor = 4.0

//const c2 = new Track(6, "Blue"); 

//console.log(c3.motor); 

// 11 - Override
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Ches = new Human("Ches", 19); 

console.log(Ches); 

//console.log(Human.prototype.age); 

Human.prototype.age = "Not defined";

console.log(Ches.age); 

console.log(Human.prototype.age); 

// 12 - Symbols
class Airplane {
  constructor(mark, turbines) {
    this.mark = mark
    this.turbines = turbines
  }
}

const wings = Symbols();
const pilots = Symbols()

Airplane.prototype[wings] = 2;

Airplane.prototype[pilots] = 3; 

const boeing = new Airplane("Boeing", 10)

console.log(boeing); 

console.log(boeing[wings]); 

console.log(boeing[pilots]); 

// 13 - Getters and Setters
class Post {
  constructor(title, description, tags) {
    this.title = title;
    this.description = description;
    this.tags = tags;
  }


get ShowText() {
    return (`You are reading: ${this.title}`); 
 }

 set AddTags(tags) {
  const tagsArrays = tags.split(", ")
  this.tags = tagsArrays
 }
 
 }

 const myPost = new Post("Some post", "Is a post for programming"); 

console.log(myPost); 

console.log(myPost.ShowText); 

myPost.AddTags = "programming, javascript, js";

console.log(myPost); 

// 14 - Heritage
class Mammal {
  constructor(paws) {
    this.paws = paws
  }
}

class Wolf extends Mammal {
  constructor(paws,name) {
    super(paws, paws) //Heritage
    this.name = name
  }
}

const Vector = new Vector(4, "Vector");

console.log(Vector); 

console.log(Vector.paws); 

// 15 - Instanceof
console.log(Vector instanceof Wolf); 

console.log(Wolf instanceof Mammal); 

console.log(new Wolf(4, "Test")instanceof Mammal); 

console.log(new Post("a", "b") instanceof Wolf); 