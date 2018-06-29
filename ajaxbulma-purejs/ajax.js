const ul = document.getElementById("slide");  
let items = ul.getElementsByTagName("li");
let botoes = ul.getElementsByClassName("botoes");
const $loader = document.getElementById("loader");

let animacao = () => {    
    for (let i = 0; i < items.length; ++i) {
      let indice = i;
    
        items[i].addEventListener('mouseover', () => {
    
          botoes[i].style.display = "block";
      
      }, false);
    
        items[i].addEventListener('mouseout', () => {
    
          botoes[i].style.display = "none";
    
        }, false);
    
    }    
}

let request = () => {

      //loader
      if(slide.readyState !== 4){
        $loader.style.display = 'block';
      }
        $loader.style.display = 'none';
      //fim do loader

    if(slide.readyState == 4){

        let data = JSON.parse(slide.responseText);
      
        for(prop in data){
        let $idAuthor = data[prop].userId;
        let $title = data[prop].title;
        let $body = data[prop].body;
        let $postID = data[prop].id;
        let $botaocomprar = `<a class="button is-primary" href="${$postID}">COMPRAR</a>`;
        
        ul.innerHTML += `
        <div class="box">
        <li class="li">
        <span>Author id: ${$idAuthor}<span>
        <div class="main">
        <div class="botoes">
        <h2><strong>${$title}</strong></h2>
        <p>${$body}</p>
        <br/>
        ${$botaocomprar}
        </div>
        </div>
      </li>
      </div>
        `;
      
        }


animacao();
      
      }
}

let slide = new XMLHttpRequest;

slide.open('GET', 'https://jsonplaceholder.typicode.com/posts/');

slide.send();

slide.onreadystatechange = () => {

setTimeout(request, 2000);

};  