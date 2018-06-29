var nav = document.querySelectorAll("nav ul li a");
var atualLink = window.location.href;

nav.forEach(function(button,index){

    button.addEventListener("click", function(){
    
        for(prop in nav){

            if(nav[prop].href == nav[index].href){
                nav[prop].classList.add("active");
            }
            else{
                nav[prop].classList.remove("active");
            }
        }

    })
})