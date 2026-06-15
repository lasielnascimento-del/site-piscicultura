const fish = document.getElementById("fish");
const botaoAjuda = document.getElementById("botaoAjuda");

botaoAjuda.addEventListener("click", function(e){

    e.preventDefault();

    fish.textContent = "😵";

    fish.classList.add("dead");

    setTimeout(() => {

        window.location.href = botaoAjuda.href;

    }, 2000);

});

/*Biblioteca*/

    AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: "ease-in-out"
});