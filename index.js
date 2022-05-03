const pintas = ["♦", "♥", "♠", "♣"];
const valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]


const proban2 = () => {
    return valores[Math.floor(Math.random() * valores.length)]
}

const probando = () => {
    return pintas[Math.floor(Math.random() * pintas.length)];
}

let pinta = probando();

if (pinta == "♥" || pinta == "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red"
}

window.onload = function () {
    document.querySelector(".top").innerHTML = pinta;
    document.querySelector(".bottom").innerHTML = pinta;
    document.querySelector(".middle").innerHTML = proban2();
}


