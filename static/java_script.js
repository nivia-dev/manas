
$(function(){
    $("#modal_sobre").click(function(){
        $("#modal-sob").modal();
    });
    });


$(function() {
    $("#modal_redes").click(function() {
        $("#modal-cont"). modal();
    });
});

    /* Função efeito escrita */
    
    /*
    let i = 0;
    let tag = document.getElementById("text");
    let html = document.getElementById("text").innerHTML;
    let attr = tag.setAttribute("data", html);
    let txt = tag.getAttribute("data");
    let speed = 170;
    
    function typeWriter() {
        if (i <= txt.length) {
            document.getElementById("text").innerHTML = txt.slice(0, i + 1);
            i++
            setTimeout(typeWriter, speed); 
        }
    }
    typeWriter(); */

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
    