var itemsSlide = document.getElementsByClassName("itemslide");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var slideIndex = 0;

function carousel(n){
    if(n > itemsSlide.length){slideIndex = 1}; 
    if(n < 1){slideIndex = itemsSlide.length}; 

    for(i = 0; i < itemsSlide.length; i++){ 
        itemsSlide[i].style.display = "none";
    }

    itemsSlide[slideIndex-1].style.display = 'block'; 
}

function nextPrev(value){
    carousel(slideIndex += value);
}

function autoPlay(){
    nextPrev(1);
}

prev.addEventListener('click', function(){
    nextPrev(-1);
})

next.addEventListener('click', function(){
    nextPrev(1);
})

autoPlay();
setInterval(autoPlay, 3000);