
const openSobreButton = document.querySelector("#open-sobre");
const closeSobreButton = document.querySelector("#close-sobre");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};


[openSobreButton, closeSobreButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

const openContatoButton = document.querySelector("#open-contato");
const closeContatoButton = document.querySelector("#close-contato");
const modals = document.querySelector("#modals");
const fades = document.querySelector("#fades");


const toggleModals = () => {
  modals.classList.toggle("hides");
  fades.classList.toggle("hides");
};



[openContatoButton, closeContatoButton, fades].forEach((el) => {
  el.addEventListener("click", () => toggleModals());
});
  
 /* 
// afetar outro elemento com mouseover
var social = document.querySelector(".social");

social.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#legenda");
  var legenda1 = document.querySelector("#legenda1")
  var legenda2 = document.querySelector("#legenda2")

  legenda.classList.remove("hiden");
  legenda1.classList.remove("hiden")
  legenda2.classList.remove("hiden")

});

social.addEventListener("mouseout", function() {

  var legenda = document.querySelector("#legenda");
  var legenda1 = document.querySelector("#legenda1");
  var legenda2 = document.querySelector("#legenda2");

  legenda.classList.add("hiden");
  legenda1.classList.add("hiden");
  legenda2.classList.add("hiden");

});*/
    