const celulas = document.querySelectorAll(".celula");
let checarTurno = true;

const jogador_x = "X";
const jogador_y = "O";

    const tipos_de_combinacoes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id);
    }

});

function jogar(id) {
    const celula = document.getElementById(id);
    turno = checarTurno ? jogador_x : jogador_y;
    celula.classList.add(turno);
    celula.textContent = turno;
    verificarVencedor(turno);
}

function verificarVencedor(turno) {
    const vencedor = tipos_de_combinacoes.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
    })

    if(vencedor) {
        fimPartida(turno);
    } else if(verificarEmpate()) {
        fimPartida();
    } else {
        checarTurno = !checarTurno;
    }  
}

function verificarEmpate() {
    let x = 0;
    let y = 0;

    for (index in celulas) {
        if(!isNaN(index)) {
            if(celulas[index].classList.contains(jogador_x)) {
                x++;
            }
            if(celulas[index].classList.contains(jogador_y)) {
                y++;
            }
        }
    }

    return x + y === 9 ? true : false;
}

function fimPartida (vencedor = null) {
    if(vencedor) {
        console.log("Vencedor: " + vencedor);
    } else {
        console.log("Empate");
    }
}

function fimPartida (vencedor = null) {
    const tela = document.getElementById("tela");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    let mensagem = null;

    tela.style.display = "block";
    tela.appendChild(h2);
    tela.appendChild(h3);

    if(vencedor) {
        h2.innerHTML = `O player <span>${vencedor}</span> venceu`;
    } else {
        h2.innerHTML = "Empatou";
    }
}

function redirecionar() {
    window.location.replace("file:///C:/xampp/htdocs/JogodaVelha/index.html");
}

