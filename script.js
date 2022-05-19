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