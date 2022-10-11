let jogadores = [];

function adicionarJogadores() {
    let nomeJogador = document.getElementById("input-name").value;
    let iconeJogador = document.getElementById("input-icon").value;

    let elementoMensagemErro = document.getElementById("mensagemErro");
    let mensagemErro = "É necessário preencher ambos os campos!";

    if (nomeJogador == "" || iconeJogador == "") {
        elementoMensagemErro.innerHTML = mensagemErro;

        mensagemErro.innerHTML = "Preencha ambos os campos!";
    } else if (iconeJogador.endsWith(".jpg") || iconeJogador.endsWith(".png")) {
        elementoMensagemErro.innerHTML = "";
        
        const novoJogador = {
            icone: "<img src='" + iconeJogador + "' class='player-icon' alt='Ícone do jogador'",
            nome: nomeJogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0,
        };

        jogadores.push(novoJogador);
        document.getElementById("input-icon").value = "";
        document.getElementById("input-name").value = "";

        let elemento = "";

        elemento += "<button type='button' id='zerar-pontos' class='generic-btn' onclick='zerarPontos()'>Zerar pontos</button>";
        elemento += "<button type='button' id='remover-jogadores' class='generic-btn' onclick='removerJogadores()'>Remover jogadores</button>";
        
        let elementoBotoes = document.getElementById("botoes");
        elementoBotoes.innerHTML = elemento;

    } else {
        elementoMensagemErro.innerHTML = "Utilize uma imagem em formato .jpg ou .png!";
    }
    exibirJogadores(jogadores);

}

function calcularPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibirJogadores(jogadores) {
    let elemento = "";

    if (jogadores.length >= 0) {
        for (let i = 0; i < jogadores.length; i++) {
            elemento += "<tr><td>" + jogadores[i].icone + "</td>";
            elemento += "<td>" + jogadores[i].nome + "</td>";
            elemento += "<td>" + jogadores[i].vitorias + "</td>";
            elemento += "<td>" + jogadores[i].empates + "</td>";
            elemento += "<td>" + jogadores[i].derrotas + "</td>";
            elemento += "<td>" + jogadores[i].pontos + "</td>";
            elemento +=
                "<td><button class='action-btn' id='vitoria' onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
            elemento +=
                "<td><button class='action-btn' id='empate' onclick='adicionarEmpate(" + i + ")'>Empate</button></td>";
            elemento +=
                "<td><button class='action-btn' id='derrota' onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
            elemento += "</tr>";
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
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);

    exibirJogadores(jogadores);
}

function adicionarEmpate() {
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].empates++;
        jogadores[i].pontos = calcularPontos(jogadores[i]);
    }

    exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++;

    exibirJogadores(jogadores);
}