/*Fazer uma nav responsiva com um menu hamburguer que ao clicar apareça os links 

BÔNUS: Fazer com que o menu hamburguer ao clicar abre os links e transforma os tracinhos em X, e ao fechar o menu volta ao estado normal com os 3 tracinhos*/

let menuHamburguer = document.querySelector(".menu_hamburguer");
let menuNav = document.querySelector(".navbar");


function abrirMenuHamburguer(){
    menuNav.classList.toggle("aparecerMenuNavegacao");  
}

menuHamburguer.onclick = abrirMenuHamburguer;