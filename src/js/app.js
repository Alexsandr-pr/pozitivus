import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import burgerMenu from "./ui/burger.js";
burgerMenu();

//импорт меню аккордеон
import  accordion  from "./ui/accordion.js";
accordion();

//import tabs from "./ui/tabs.js";
//tabs(triggerClass, contentClass);

import DynamicAdapt from "./modules/dynamicadapt.js";
const da = new DynamicAdapt("max");
da.init();


// импорт модуля форм
import forms from "./modules/forms.js";
forms();



const swiper = new Swiper(".case__swiper", {
    
    breakpoints: {
        120.98: {
            spaceBetween: 20,
            slidesPerView: 1.2,
        },
        767.98: {
            spaceBetween: 80,
            slidesPerView: 2,
        },
        1200.98: {
            slidesPerView: 3,
            spaceBetween: 120,
        }
    }

})
const swiper2 = new Swiper(".slider__swiper", {
    
    

    breakpoints: {
        120.98: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        767.98: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        991.98: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 50,
        }
    }


})


window.addEventListener("resize", () => {
    const triggers = document.querySelectorAll("[data-spoller-trigger]");   
    triggers.forEach(item => {
        const parent = item.parentElement;
        const content = item.nextElementSibling;

        
        if(parent.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
})





