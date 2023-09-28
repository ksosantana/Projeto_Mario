const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
   
   modal.classList.add("aberto");
   video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => { 
   modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

/*objetivo 1 = quando o usuáio clicar no botão de "VEJA O TRAILER" devemos abrir a modal com o video do trailer. 

 passo 1 - dar um jeito de pegar um elemento que representa o botão na tela utilizando js. 

 passo 2 - dar um jeito de indentificar quando o usuário clicar no botão.

 passo 3 - dar um jeito de pegar esse elemento da modal no js.

 passo 4- abrir a modal na tela.


 OBJETIVO 2 = quado o usuário clicar no "X", devemos fechar a modal.

 passo 1 - dar um jeito de pegar o elemento de fechar a modal usandoo js.

 passo 2 - ddar um jeito de indentificar quando o usuário clicar no "X".
 
 passo 3 - fechar a modal. 



*/
