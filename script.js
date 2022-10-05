let jogadores = [];


function adicionarJogadores() {
    let nomeJogador = document.getElementById("input-nome").value;

    if (nomeJogador != "") {
        const novoJogador = {
            nome: nomeJogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        };
        
        jogadores.push(novoJogador);
        document.getElementById("input-nome").value = "";
    }
    exibirJogadores(jogadores);
}

function calcularPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibirJogadores(jogadores) {
    let elemento = "";

    if (jogadores.length > 0) {
        for (let i = 0; i < jogadores.length; i++) {
            elemento += "<tr><td>" + jogadores[i].nome + "</td>";
            elemento += "<td>" + jogadores[i].vitorias + "</td>";
            elemento += "<td>" + jogadores[i].empates + "</td>";
            elemento += "<td>" + jogadores[i].derrotas + "</td>";
            elemento += "<td>" + jogadores[i].pontos + "</td>";
            elemento +=
                "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
            elemento +=
                "<td><button onclick='adicionarEmpate(" + i + ")'>Empate</button></td>";
            elemento +=
                "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
            elemento += "</tr>";
        }
    
        let tabelaJogadores = document.getElementById("tabelaJogadores");
        tabelaJogadores.innerHTML = elemento;
    }
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
