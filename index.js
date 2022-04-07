'use strict';

const images = [
    {'id' : '1', 'url':'./img/msx.png'},
    {'id' : '2', 'url':'./img/ygo.png'},
    {'id' : '3', 'url':'./img/dr1.png'},
    {'id' : '4', 'url':'./img/dr2.png'},
    {'id' : '5', 'url':'./img/ff7.png'},
    {'id' : '6', 'url':'./img/re2.png'},
    {'id' : '7', 'url':'./img/3x.png'},

]

const containerItems = document.querySelector('.container-items');
const previousItems = document.querySelector('#previousItems');
const nextItems = document.querySelector('#nextItems');

const Rbutton = document.querySelector('#previous');
const Lbutton = document.querySelector('#next');

const loadImagens = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}


loadImagens(images, containerItems);

previousItems.style.backgroundImage = `url(${images[0].url})`;


let items = document.querySelectorAll('.item');


const previous = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    window.alert(containerItems.sr);
}

const next = () =>{
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

Lbutton.addEventListener('click', previous);
Rbutton.addEventListener('click', next);



