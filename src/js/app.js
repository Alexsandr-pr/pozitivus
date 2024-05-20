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
    navigation: {
		nextEl: '.navigation-swiper-right',
		prevEl: '.navigation-swiper-left'
	},

    initialSlide: 1,
    loop:true,
    breakpoints: {
        120.98: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        667.98: {
            spaceBetween: 30,
            slidesPerView: 1.2,
            centeredSlides: true,
        },
        800: {
            centeredSlides: true,
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        1280.98: {
            centeredSlides: true,
            slidesPerView: 1.8,
            spaceBetween: 50,
        }
    },
    pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
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





const elementToArray = document.querySelectorAll("[data-go]");


elementToArray.forEach(item => {
    item.addEventListener("click", (e) => {
        console.log(item)
        e.preventDefault();
        const element = item.dataset.go;
        const height = offset(document.querySelector(element)).top;

        window.scrollTo({
            top: height  ,
            behavior: "smooth",
        });
    })
})



function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
}