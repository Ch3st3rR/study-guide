// 1 - moving to DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].textContent);

// 2 - Selecting of tag
const listitens = document.getElementsByTagName("li");

console.log(listitens);

// 3 - Selecting element of ID
const title = document.getElementById("title");

console.log(title);

// 4 - Selecting elements of class
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - Selecting the elements for CSS
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

//console.log(p);

const header = title.parentElement;

//console.log(header);

header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "My new title!";

header.replaceChild(h2, title);

// 9 - createTextNode
const myText = document.createTextNode("Now we will put one more title");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - Working with attributes
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - Height and Width
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); 
console.log(footer.offsetHeight); 

console.log(footer.clientWidth); 
console.log(footer.clientHeight); 

// 12 - getClientBoundingRect 
const product1 = products[0]

console.log(product1.getBoundingClientRect());

// 13 - Styles with JS
mainContainer.style.color = "red"; 
mainContainer.style.backgroundColor = "#222"; 
mainContainer.style.paddingBottom = "15px"; 

// 14 - HTMLCollection
for(const li of listitens) {
    li.style.backgroundColor = "red";
}