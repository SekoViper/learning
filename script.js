var toggler = document.querySelector('.toggler');
var mainNav = document.querySelector('.main-nav');
toggler.addEventListener('click', function(){
    mainNav.classList.toggle('nav-active');
    console.log('clicked')
})


function changeMode(){
    var element = document.body;
    element.classList.toggle('darkMode')
    console.log('cliked')
}


// emolis project

const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.far');

const colors = ["red", "lightgreen", "orange", "lightblue", "green"]

updateRating(0)

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index)
    })
})
function updateRating(index){
    stars.forEach((star, newIndex) => {
        if(newIndex < index + 1){
            star.classList.add('active')
        } else{
            star.classList.remove('active')
        }
    })

    emojis.forEach(emoji =>{
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colors[index]
    });
}

// profile rating 
const counter = document.querySelectorAll('.counter')
counter.forEach((count) =>{
    count.innerText = "0"
    Increment()
    function Increment(){
        let currentNum = +count.innerText;
        const dataCeil = count.getAttribute('data-ceil');
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);
        if(currentNum < dataCeil){
            count.innerText = currentNum;
            setTimeout(Increment, 50)
        }else{
            count.innerText = dataCeil
        }
    }
})



// rotating image project
const imageContainerEl = document.querySelector('.imageContainer');
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')

let x = 0
let timer;
prevEl.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    UpdateGallery();
})
nextEl.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    UpdateGallery();
})

function UpdateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45;
        UpdateGallery()
    }, 3000)
}
UpdateGallery()

// new year countdown

const dayEl = document.getElementById('days');
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');

const newYearDate = new Date("Jan 1, 2023 00:00:00").getTime()
updateCountdown()
function updateCountdown(){
    const now = new Date().getTime()
    const gap = newYearDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const daysToEndTheYear = Math.floor(gap/day);
    const hoursToEndTheYear = Math.floor((gap % day)/hour);
    const minutesToEndTheYear = Math.floor((gap % hour)/minute);
    const secondsToEndTheYear = Math.floor((gap % minute)/second);

    dayEl.innerText = daysToEndTheYear;
    hourEl.innerText = hoursToEndTheYear;
    minuteEl.innerText = minutesToEndTheYear;
    secondEl.innerText = secondsToEndTheYear;
    setTimeout(updateCountdown, 1000)
}