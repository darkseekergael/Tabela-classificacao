// const rafa = {
//   nome: "Rafaela",
//   vitorias: 2,
//   empates: 1,
//   derrotas: 1,
//   pontos: 0
// };

// const paulo = {
//   nome: "Paulo",
//   vitorias: 1,
//   empates: 1,
//   derrotas: 2,
//   pontos: 0
// };

// let jogadores = [rafa, paulo];

let jogadores = [];

// exibirJogadores(jogadores);

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

function adicionarVitoria(i) {
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);

    exibirJogadores(jogadores);
}

function adicionarEmpate() {
    let jogador = jogadores[i];

    for (let i = 0; i < jogador.length; i++) {
        jogador.empates++;
        jogador.pontos = calcularPontos(jogador);
    }

    exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++;

    exibirJogadores(jogadores);
}
