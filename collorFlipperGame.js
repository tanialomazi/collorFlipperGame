// O 2� de muitos

//Pegando objetos HTML
let bt = document.querySelectorAll(".bt");
let main = document.getElementById("main");
let ct = document.getElementById("ct");

let counter = 0; //inicia o ct

//vari�vel com a cor correta
let color = "Azul"; // inicialmente � o azul, depois ela muda

//reconhecendo os cliques nos bot�es
bt.forEach(function (button) {
    button.addEventListener("click", function (e) {

        //cria n�meros aleat�rios para as cores RGB
        let rand1 = Math.floor((Math.random() * 255) + 1);
        let rand2 = Math.floor((Math.random() * 255) + 1);
        let rand3 = Math.floor((Math.random() * 255) + 1);

        //muda pontua��o
        if (e.currentTarget.textContent == color) {
            counter++;
            ct.textContent = counter;
        } else {
            counter--;
            ct.textContent = counter;
        }

        //change counter color
        if (counter < 0) {
            ct.style.color = "red"
        } else if (counter > 0) {
            ct.style.color = "green";
        } else {
            ct.style.color = "black";
        }

        //muda a cor do background
        main.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";

        color = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";//redefine vari�vel color

        let x = Math.floor(Math.random() * 3);

        if (x == 0) {
            bt[0].textContent = color;
            bt[1].textContent = "rgb(" + (rand1 + 37) + "," + (rand2 + 40) + "," + (rand3 + 25) + ")";
            bt[2].textContent = "rgb(" + (rand1 + 15) + "," + (rand2 + 3) + "," + (rand3 + 14) + ")";
        } else if (x == 1) {
            bt[0].textContent = "rgb(" + (rand1 + 37) + "," + (rand2 + 40) + "," + (rand3 + 25) + ")";
            bt[1].textContent = color;
            bt[2].textContent = "rgb(" + (rand1 + 15) + "," + (rand2 + 3) + "," + (rand3 + 14) + ")";
        } else {
            bt[0].textContent = "rgb(" + (rand1 + 37) + "," + (rand2 + 40) + "," + (rand3 + 25) + ")";
            bt[1].textContent = "rgb(" + (rand1 + 15) + "," + (rand2 + 3) + "," + (rand3 + 14) + ")";
            bt[2].textContent = color;
        }

    })
})
