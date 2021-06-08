import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');


const hamburgerButtonElement = document.querySelector("#mobile-menu");
const drawerElement = document.querySelector(".nav-list");
const mainElement = document.querySelector("main");
 
 
hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("mobile-nav");
    hamburgerButtonElement.classList.toggle("is-active");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    drawerElement.classList.remove("mobile-nav");
    hamburgerButtonElement.classList.remove("is-active");
    event.stopPropagation();
})