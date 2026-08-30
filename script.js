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

    menuToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        navMenu.classList.toggle("show");

    });


    document.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });


    navMenu.addEventListener("click", (e) => {

        e.stopPropagation();

    });

}

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});

const serviceSelect = document.getElementById("serviceSelect");
const serviceSelectBox = document.getElementById("serviceSelectBox");
const selectedServicesText = document.getElementById("selectedServicesText");

if (serviceSelect) {

    serviceSelectBox.addEventListener("click", function () {
        serviceSelect.classList.toggle("open");
    });

    const serviceCheckboxes = serviceSelect.querySelectorAll(
        'input[name="services[]"]'
    );

    serviceCheckboxes.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            const selected = Array.from(serviceCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            if (selected.length === 0) {
                selectedServicesText.textContent = "Select Services";
            } else {
                selectedServicesText.textContent = selected.join(", ");
            }

        });

    });

    document.addEventListener("click", function (event) {

        if (!serviceSelect.contains(event.target)) {
            serviceSelect.classList.remove("open");
        }

    });
}

const quoteForm = document.querySelector(".quote-form");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        const selectedServices = document.querySelectorAll(
            '#serviceSelect input[name="services[]"]:checked'
        );

        if (selectedServices.length === 0) {
            event.preventDefault();
            alert("Please select at least one service.");
        }

    });

}
