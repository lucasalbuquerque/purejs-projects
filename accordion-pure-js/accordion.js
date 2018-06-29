var accordion = function(value){

    var pureAccordion = document.querySelector(value);
    var titleEl = pureAccordion.querySelectorAll("h3");
    var contentAccordion = pureAccordion.querySelectorAll("div");

    [].forEach.call(titleEl, function(title,index){

        contentAccordion[index].style.display = "none";

        title.addEventListener("click", function(){
    
            for(i = 0; i < titleEl.length; i++){
                if(i !== index){
                    contentAccordion[i].style.display = "none";
                    titleEl[i].style.cssText = "background-image: url(accordion-down.png);";
                }
            }
    
            if(contentAccordion[index].style.display == ''){
                contentAccordion[index].style.display = "block";
                titleEl[index].style.cssText = "background-image: url(accordion.png);";
            }else if(contentAccordion[index].style.display == "block"){
                contentAccordion[index].style.display = "none";
                titleEl[index].style.cssText = "background-image: url(accordion-down.png);";
            }else if(contentAccordion[index].style.display == "none"){
                contentAccordion[index].style.display = "block";
                titleEl[index].style.cssText = "background-image: url(accordion.png);";
            }
        })
    
    })
}

accordion(".accordion");
accordion(".accordion-new")