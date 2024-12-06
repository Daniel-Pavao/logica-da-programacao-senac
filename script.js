//COMEÇO EXERCÍCIO 5//
let escuroCount = 0;
        let contrasteCount = 0;
        let focoCount = 0;

        function modoEscuro5() {
            escuroCount++;
            if (escuroCount === 1) {
                document.body.style.backgroundColor = "#333";
                document.body.style.color = "#fff";
            } else if (escuroCount === 2) {
                document.body.style.backgroundColor = "#222";
                document.body.style.color = "#ccc";
            } else if (escuroCount === 3) {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                escuroCount = 0;
            }
        }
        function ajusteContraste5() {
            contrasteCount++;
            if (contrasteCount === 1) {
                document.body.style.backgroundColor = "#d3d3d3";
                document.body.style.color = "black";
            } else if (contrasteCount === 2) {
                document.body.style.backgroundColor = "#f5f5dc";
                document.body.style.color = "black";
            } else if (contrasteCount === 3) {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                contrasteCount = 0;
            }
        }
        function modoFoco5() {
            focoCount++;
            const body = document.body;
            if (focoCount === 1) {
                body.style.transform = "scale(1.2)";
                body.style.transformOrigin = "top";
            } else if (focoCount === 2) {
                body.style.transform = "scale(1.5)";
                body.style.transformOrigin = "top";
            } else if (focoCount=== 3) {
                body.style.transform = "scale(1)";
                body.style.transformOrigin = "top";
                focoCount = 0;
            }
        }
//FIM EXERCÍCIO 5//

//COMEÇO EXERCÍCIO 6//

function jogo6() {
    let nomeUsuário6;

    while (true) {
        nomeUsuário6 = prompt("Digite seu nome: ");
        if (nomeUsuário6 === "" || /\d/.test(nomeUsuário6)) {
            alert("Por favor, digite um nome válido (sem números e não vazio).");
        } else {
            break;
        }
    }
    console.log("O usuário se chama: " + nomeUsuário6);

    let idadeUsuario6;

    while (true) {
        idadeUsuario6 = prompt("Digite sua idade: ");
        if (idadeUsuario6 ===" " || isNaN(idadeUsuario6) || idadeUsuario6 <= 0 || idadeUsuario6 ==="") {
            alert("Por favor, digite uma idade válida.")
        } else {
            idadeUsuario6 = parseInt(idadeUsuario6);
            break;
        }
    }
    console.log(nomeUsuário6 + " tem " + idadeUsuario6 + " anos.")
    if (idadeUsuario6 >= 18) {
        console.log(nomeUsuário6 + " é maior de idade.");
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
        console.log(nomeUsuário6 + " é menor de idade.");
    }
}

//FIM EXERCÍCIO 6//
//INICIO EXERCÍCIO 7//
function jogo7() {
    let tentativas7 = 0;
    const limitetentativas7 = 3;
    const numSecreto7 = Math.floor(Math.random() * 10) + 1;
    console.log("O Número Secreto é " + numSecreto7);

    let palpite7;

    do {
        palpite7 = prompt("Escolha um número entre 1 e 10:");

        if (!palpite7 || isNaN(palpite7) || palpite7 < 1 || palpite7 > 10) {
            alert("Por favor, insira um número válido entre 1 e 10.");
            continue;
        }

        palpite7 = parseInt(palpite7);
        tentativas7++;

        if (palpite7 < numSecreto7) {
            alert("O número secreto é maior! Continue tentando.");
        } else if (palpite7 > numSecreto7) {
            alert("O número secreto é menor! Continue tentando.");
        } else {
            alert(`Parabéns! Você acertou o número secreto "${numSecreto7}" em ${tentativas7} tentativas.`);
            break;
        }

        if (tentativas7 === limitetentativas7) {
            alert(`Você atingiu o limite de tentativas! O número secreto era ${numSecreto7}.`);
            break;
        }
    } while (palpite7 !== numSecreto7);
}

//FIM EXERCÍCIO//
//EXERCÍCIO 8//
let tentativas8 = 0;
    const limitetentativas8 = 3;
    let numSecreto8;

    function iniciarJogo() {
      tentativas8 = 0;
      numSecreto8 = Math.floor(Math.random() * 10) + 1;
      console.log("O Número Secreto é " + numSecreto8);
      document.getElementById("txt8").textContent = "O Jogo Comecou! Boa sorte!";
      document.getElementById("game").style.display = "block";
      document.getElementById("result").textContent = "";
      document.getElementById("input-palpite").value = "";
      document.getElementById("input-palpite").disabled = false;
      document.getElementById("btn-palpite").disabled = false;
    }
    function verificarPalpite() {
      const input = document.getElementById("input-palpite");
      const btnPalpite = document.getElementById("btn-palpite");
      let palpite8 = parseInt(input.value);
      if (isNaN(palpite8) || palpite8 < 1 || palpite8 > 10) {
        document.getElementById("result").textContent = "Por favor, insira um numero valido entre 1 e 10.";
        input.value = "";
        return;
      }
      tentativas8++;
      if (palpite8 < numSecreto8) {
        document.getElementById("result").textContent = "O numero secreto e maior! Continue tentando.";
      } else if (palpite8 > numSecreto8) {
        document.getElementById("result").textContent = "O numero secreto e menor! Continue tentando.";
      } else {
        document.getElementById("result").textContent = `Parabens! Voce acertou o numero secreto ${numSecreto8}, em ${tentativas8} tentativa(s)!`;
        finalizarJogo();
        return;
      }
      if (tentativas8 === limitetentativas8) {
        document.getElementById("result").textContent = `Voce atingiu o limite de tentativas! O numero secreto era ${numSecreto8}.`;
        finalizarJogo();
      }
      input.value = "";
    }
    function finalizarJogo() {
      document.getElementById("input-palpite").disabled = true;
      document.getElementById("btn-palpite").disabled = true;
    }
//FIM EXERCÍCIO 8//