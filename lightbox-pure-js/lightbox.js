var close = document.querySelectorAll(".close");
var lightbox = document.querySelectorAll("#lightbox");
var btn = document.querySelectorAll(".btn");

btn.forEach(function(btn,index){
    btn.addEventListener("click", function(event){
        event.preventDefault();
        lightbox[index].style.display = "block";
    });
})

close.forEach(function(closeBtn,index){
    closeBtn.addEventListener("click", function(){
        lightbox[index].style.display = "none";
    })
})