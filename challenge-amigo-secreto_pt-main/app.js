//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomesAmigos = inputAmigo.value.trim();

    if (nomesAmigos === "") {
        alert("Por favor, insira um nome.");
        exibirMensagem("Por favor, insira um nome.", "erro");
        return;
    }

    const nomeFormatado = nomesAmigos.toLowerCase();

    if (amigos.includes(nomeFormatado)) {
        exibirMensagem(`${nomesAmigos} já está na lista`, "erro");
        return;
    }

    amigos.push(nomeFormatado);
    inputAmigo.value = "";
    atualizarLista();
    exibirMensagem("Amigo adicionado com sucesso!", "sucesso");
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo.charAt(0).toUpperCase() + amigo.slice(1);

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    exibirMensagem("Amigo removido!", "sucesso");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear. Adicione ao menos um.");
        exibirMensagem("Não há amigos disponíveis para sortear.", "erro");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado.charAt(0).toUpperCase() + amigoSorteado.slice(1)}</strong>`;
}

function exibirMensagem(mensagem, tipo) {
    const msgBox = document.getElementById("mensagem");
    msgBox.textContent = mensagem;
    msgBox.style.color = tipo === "erro" ? "red" : "green";

    setTimeout(() => {
        msgBox.textContent = "";
    }, 3000);
}


