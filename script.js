let jogadores = [];

function adicionarJogadores() {
    let nomeJogador = document.getElementById("inputName").value;
    let iconeJogador = document.getElementById("inputIcon").value;
    let elementoMensagemErro = document.getElementById("mensagemErro");

    if (nomeJogador === "" || iconeJogador === "") {
        elementoMensagemErro.innerHTML = "Preencha ambos os campos!";

    } else if (iconeJogador.endsWith(".jpg") === false && iconeJogador.endsWith(".png") === false) {
        elementoMensagemErro.innerHTML = "Utilize uma imagem em formato .jpg ou .png!";

    } else if (verificarJogadorExistente() === true) {
        elementoMensagemErro.innerHTML = `O jogador [ ${nomeJogador} ] já existe!`;

    } else {
        elementoMensagemErro.innerHTML = "";

        const novoJogador = {
            icone: `<img src='${iconeJogador}' class='player-icon' alt='Ícone do jogador'`,
            nome: nomeJogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
        };

        jogadores.push(novoJogador);
        document.getElementById("inputIcon").value = "";
        document.getElementById("inputName").value = "";

        let elemento = "";

        elemento += "<button type='button' class='generic-btn' onclick='zerarPontos()'>Zerar pontos</button>";
        elemento += "<button type='button' class='generic-btn' onclick='removerJogadores()'>Remover jogadores</button>";

        let elementoBotoes = document.getElementById("botoes");
        elementoBotoes.innerHTML = elemento;

        exibirJogadores(jogadores);
    }
}

function verificarJogadorExistente() {
    let nomeJogador = document.getElementById("inputName").value;

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].nome === nomeJogador) {
            return true;
        }
    }
    return false;
}

function calcularPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibirJogadores(jogadores) {
    let elemento = "";

    if (jogadores.length >= 0) {
        for (let i = 0; i < jogadores.length; i++) {
            elemento += `<tr><td> ${jogadores[i].icone} </td>`;
            elemento += `<td> ${jogadores[i].nome} </td>`;
            elemento += `<td> ${jogadores[i].vitorias} </td>`;
            elemento += `<td> ${jogadores[i].empates} </td>`;
            elemento += `<td> ${jogadores[i].derrotas} </td>`;
            elemento += `<td> ${jogadores[i].pontos} </td>`;
            elemento +=
                `<td><button type='button' class='action-btn' id='btnVitoria(${i})' onclick='adicionarVitoria(${i})'>Vitória</button></td>`;
            elemento +=
                `<td><button type='button' class='action-btn' id='btnEmpate(${i})' onclick='adicionarEmpate(${i})'>Empate</button></td>`;
            elemento +=
                `<td><button type='button' class='action-btn' id='btnDerrota(${i})' onclick='adicionarDerrota(${i})'>Derrota</button></td></tr>`;
        }

        let tabelaJogadores = document.getElementById("tabelaJogadores");
        tabelaJogadores.innerHTML = elemento;
    }
}

function removerJogadores() {
    jogadores.length = 0;

    exibirJogadores(jogadores);
}

function zerarPontos() {
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].empates = 0;
        jogadores[i].pontos = calcularPontos(jogadores[i]);
    }

    exibirJogadores(jogadores);
}

function adicionarVitoria(i) {
    let btnEmpate = document.getElementById(`btnEmpate(${i})`);

    if (btnEmpate.disabled == false) {
        let jogador = jogadores[i];
        jogador.vitorias++;
        jogador.pontos = calcularPontos(jogador);
        exibirJogadores(jogadores);

        let btnDerrota = document.getElementById(`btnDerrota(${i})`);
        btnDerrota.disabled = true;

        for (let j = 0; j < jogadores.length; j++) {
            let btnEmpate = document.getElementById(`btnEmpate(${j})`);
            btnEmpate.disabled = true;

            let btnVitoria = document.getElementById(`btnVitoria(${j})`);
            btnVitoria.disabled = true;
        }
    } else {
        let jogador = jogadores[i];
        jogador.vitorias++;
        jogador.pontos = calcularPontos(jogador);
        exibirJogadores(jogadores);

        let btnDerrota = document.getElementById(`btnDerrota(${i})`);
        btnDerrota.disabled = false;

        for (let j = 0; j < jogadores.length; j++) {
            let btnEmpate = document.getElementById(`btnEmpate(${j})`);
            btnEmpate.disabled = false;

            let btnVitoria = document.getElementById(`btnVitoria(${j})`);
            btnVitoria.disabled = false;
        }
    }
}

function adicionarDerrota(i) {
    let btnEmpate = document.getElementById(`btnEmpate(${i})`);

    if (btnEmpate.disabled == false) {
        let jogador = jogadores[i];
        jogador.derrotas++;
        exibirJogadores(jogadores);

        let btnVitoria = document.getElementById(`btnVitoria(${i})`);
        btnVitoria.disabled = true;

        for (let j = 0; j < jogadores.length; j++) {
            let btnEmpate = document.getElementById(`btnEmpate(${j})`);
            btnEmpate.disabled = true;

            let btnDerrota = document.getElementById(`btnDerrota(${j})`);
            btnDerrota.disabled = true;
        }
    } else {
        let jogador = jogadores[i];
        jogador.derrotas++;
        exibirJogadores(jogadores);

        let btnVitoria = document.getElementById(`btnVitoria(${i})`);
        btnVitoria.disabled = false;

        for (let j = 0; j < jogadores.length; j++) {
            let btnEmpate = document.getElementById(`btnEmpate(${j})`);
            btnEmpate.disabled = false;

            let btnDerrota = document.getElementById(`btnDerrota(${j})`);
            btnDerrota.disabled = false;
        }
    }
}

function adicionarEmpate(i) {
    let btnDerrota = document.getElementById(`btnDerrota(${i})`);

    if (btnDerrota.disabled == false) {
        let jogador = jogadores[i];

        jogador.empates++;
        jogador.pontos = calcularPontos(jogador);

        exibirJogadores(jogadores);

        let btnEmpate = document.getElementById(`btnEmpate(${i})`);
        btnEmpate.disabled = true;

        for (let j = 0; j < jogadores.length; j++) {
            let btnVitoria = document.getElementById(`btnVitoria(${j})`);
            btnVitoria.disabled = true;

            let btnDerrota = document.getElementById(`btnDerrota(${j})`);
            btnDerrota.disabled = true;
        }
    } else {
        let jogador = jogadores[i];

        jogador.empates++;
        jogador.pontos = calcularPontos(jogador);

        exibirJogadores(jogadores);

        let btnEmpate = document.getElementById(`btnEmpate(${i})`);
        btnEmpate.disabled = false;

        for (let j = 0; j < jogadores.length; j++) {
            let btnVitoria = document.getElementById(`btnVitoria(${j})`);
            btnVitoria.disabled = false;

            let btnDerrota = document.getElementById(`btnDerrota(${j})`);
            btnDerrota.disabled = false;
        }
    }

}