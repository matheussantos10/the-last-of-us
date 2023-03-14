/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagensCarrossel = document.querySelectorAll(".imagem");

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener("click", () => {
      desativarBotaoSelecionado();

      selecionarBotaoCarrossel(botao);

      esconderImagemAtiva();

      mostrarImagemDeFundo(indice);
   });
});

// passo 3 - desmarcar o botão selecionado anterior
function desativarBotaoSelecionado() {
   const botaoSelecionado = document.querySelector(".selecionado");
   botaoSelecionado.classList.remove("selecionado");
}

// passo 4 - marcar o botão clicado como se estivesse selecionado
function selecionarBotaoCarrossel(botao) {
   botao.classList.add("selecionado");
}

// passo 5 - esconder a imagem de fundo ativa
function esconderImagemAtiva() {
   const imagemAtiva = document.querySelector(".ativa");
   imagemAtiva.classList.remove("ativa");
}

// passo 6 - fazer aparecer a imagem correspondente ao botão clicado
function mostrarImagemDeFundo(indice) {
   imagensCarrossel[indice].classList.add("ativa");
}
