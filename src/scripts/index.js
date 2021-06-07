import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');


const hamburgerButtonElement = document.querySelector("#menu-btn");
const drawerElement = document.querySelector("#mobile-menu");
const mainElement = document.querySelector("main");
 
 
hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
})