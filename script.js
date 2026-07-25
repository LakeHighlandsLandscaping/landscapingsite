// Accordion

const buttons=document.querySelectorAll(".accordion-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const content=button.nextElementSibling;

document.querySelectorAll(".accordion-content").forEach(item=>{

if(item!==content){

item.style.maxHeight=null;

item.classList.remove("open");

}

});

if(content.classList.contains("open")){

content.style.maxHeight=null;

content.classList.remove("open");

}else{

content.classList.add("open");

content.style.maxHeight=content.scrollHeight+"px";

}

});

});



// Fade In Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".fade-in").forEach(el=>{

observer.observe(el);

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

}

