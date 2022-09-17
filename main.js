import './style.scss'
import * as bootstrap from 'bootstrap';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import counterUp from 'counterup2';
import './node_modules/waypoints/lib/noframework.waypoints';

//nav
const dropItem = document.querySelector('#drop-1');
const toDrop = new bootstrap.Dropdown(dropItem);
dropItem.addEventListener('mouseover',() => {
    toDrop.show();
})
dropItem.addEventListener('mouseout',() => {
    toDrop.hide();
})


//for hero section
ScrollReveal().reveal('.toTopHero_1',{
    duration : 900,
    delay : 200,
    interval :90,
    origin : 'bottom',
    distance: '50px'
})

//for section_2
ScrollReveal().reveal('.toTopSection_2',{
    duration : 1200,
    delay : 1200,
    interval :70,
    origin : 'bottom',
    distance: '50px'
})

//section_4 typing
var options = {
  strings: ['developers','founders','designers'],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 700,
  loop: true,
  loopCount: Infinity,
};

var typed = new Typed('.section_4-type', options);

ScrollReveal().reveal('.toLeftSection_4',{
    duration : 1000,
    delay :200,
    origin : 'left',
    distance: '50px'
})


ScrollReveal().reveal('.toRightSection_4',{
    duration : 1000,
    delay :300,
    origin : 'right',
    distance: '50px'
})


ScrollReveal().reveal('.toLeftSection_4_sec',{
    duration : 1100,
    delay :200,
    origin : 'left',
    distance: '50px'
})


ScrollReveal().reveal('.toRightSection_4_sec',{
    duration : 1100,
    delay :200,
    origin : 'right',
    distance: '50px'
});

//section_5
const imgSlide = new bootstrap.Carousel('#img-slide', {
    interval: 2000,
    wrap: true
  });
const textSlide= new bootstrap.Carousel('#text-slide', {
    interval: 2000,
    wrap: true
})
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

nextBtn.addEventListener('click',() => {
    imgSlide.next();
    textSlide.next();
})

prevBtn.addEventListener('click',() => {
    imgSlide.prev();
    textSlide.prev();
})

//section_6
const num1 = document.querySelector( '.counter1' )
const num2 = document.querySelector( '.counter2' )
const num3 = document.querySelector( '.counter3' )
const num4 = document.querySelector( '.counter4' )

new Waypoint( {
    element: document.querySelector('.section-6'),
    handler: function() { 
        counterUp( num1, { duration: 1000 });
        counterUp( num2, { duration: 1000 });
        counterUp( num3, { duration: 1000 });
        counterUp( num4, { duration: 1000 });
    },
    offset:'80%',
} )

//section_7
let checkBtn= document.querySelector('.check-btn');
let changeNum= document.querySelector('.number');

checkBtn.addEventListener('click',() => {
    if(checkBtn.value === 'on'){
        changeNum.textContent = changeNum.dataset.monthly;
        counterUp( changeNum, { duration: 400 }); 
        checkBtn.value = 'off';
    }else if(checkBtn.value === 'off'){
        changeNum.textContent = changeNum.dataset.annual;
        counterUp( changeNum, { duration: 400 }); 
        checkBtn.value = 'on';
    }
    
})

ScrollReveal().reveal('.toTopSection_7',{
    duration : 1000,
    delay : 300,
    interval :150,
    origin : 'bottom',
    distance: '50px'
})
