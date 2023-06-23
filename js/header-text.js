// BOM
// window
// DOM
// document.querySelector('css selector')
// document.querySelectorAll('css selector')

const title = document.querySelector('.header__title');

const greetings = [
    'Hello!',
    'Welcome!',
    'Hola!',
    'Nice to see you!',
    'Вітання!',
    'Привіт!'
];

const colors = [
    'red',
    'green',
    'yellow',
    'white'
]

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

title.innerText = getRandom(greetings);
title.style.color = getRandom(colors);


