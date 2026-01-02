import { animate, scroll, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const title = document.querySelector('.title')
const navbar = document.querySelector('nav')
const logo = document.querySelector('.logo')
const frierem = document.querySelector('.frierem')
const h2 = document.querySelectorAll('h2')
const p = document.querySelectorAll('p')
animate(
    h2,
    {opacity:[0, 1]},
    {duration:3.0, easing:'ease-out'}
);

animate(
    p,
    {opacity:[0, 1]},
    {duration:3.5, easing:'ease-out'}
);
animate (logo,
    {opacity:[0, 1], y:[0, 220]},
    {duration:5.0, easing:'ease-out'}
);



animate (title,
    {opacity:[0, 1], y:[0, 0]},
    {duration:0.8, easing:'ease-out'}
);

animate (navbar,
    {opacity:[0, 1], y:[0, 0]},
    {duration:0.8, easing:'ease-out'}
);
animate(frierem,
  { opacity: [0, 1], y: [250, -10] },
  { duration: 2.5, easing: "ease-out" }
)

const slide = document.querySelector(".carrossel-slide")
const images = document.querySelectorAll(".carrossel-slide img")
const btnPrev = document.querySelector(".seta.esquerda")
const btnNext = document.querySelector(".seta.direita")

let index = 0
const imageWidth = 310 // largura + gap

btnNext.addEventListener("click", () => {
    if (index < images.length - 1) {
        index++
        slide.style.transform = `translateX(-${index * imageWidth}px)`
    }
})

btnPrev.addEventListener("click", () => {
    if (index > 0) {
        index--
        slide.style.transform = `translateX(-${index * imageWidth}px)`
    }
})

inView(".footer", () => {
    animate(
        ".footer *",
        { 
            opacity: [0, 1], 
            y: [30, 0] 
        },
        { 
            duration: 1.1,
            easing: "ease-out",
            stagger: 0.05
        }
    );
});

// CARROSSEL INFINITO
let infinito = 1;

const largura = images[0].clientWidth;

// 🔁 CLONAR
const primeiroClone = images[0].cloneNode(true);
const ultimoClone = images[images.length - 1].cloneNode(true);

// adicionar clones
slide.appendChild(primeiroClone);
slide.insertBefore(ultimoClone, images[0]);

// posição inicial (slide real)
slide.style.transform = `translateX(${-largura * infinito}px)`;

btnNext.addEventListener("click", () => {
    if (index >= images.length - 1) return;
    index++;
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = `translateX(${-largura * (index + infinito)}px)`;
});

btnPrev.addEventListener("click", () => {
    if (index <= -infinito) return;
    index--;
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = `translateX(${-largura * (index + infinito)}px)`;
});