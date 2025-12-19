import { animate, scroll, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const title = document.querySelector('.title')
const navbar = document.querySelector('nav')
const logo = document.querySelector('.logo')
const frierem = document.querySelector('.frierem')
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