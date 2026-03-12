const root = document.documentElement;
const btn = document.getElementById("btntema"); 
const year = document.getElementById("year");

// preenchendo o ano atual
year.textContent = new Date().getFullYear();

// alternar tema light/dark
btn.addEventListener("click", () => {
    const dark = root.getAttribute("data-tema") === "dark"; // corrigido o nome do atributo

    if (dark) {
        root.removeAttribute("data-tema");
    } else {
        root.setAttribute("data-tema", "dark");
    }
});

