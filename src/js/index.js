//OBJETIVO 1 - quando clicarmos na seta de avançasr temos que mostrar o próximo cartão da lista
// - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
// - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar (objetivo 2)
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
// - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual === cartoes.length -1;
    if(ehUltimoCartao) return;

  //- passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartoesSelecionado();

// - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
    cartaoAtual++;
    mostrarCartao();

});

//OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o próximo cartão anterior da lista


// - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
btnVoltar.addEventListener("click", function () {
  const ehPrimeiroCartao = cartaoAtual === 0;
  if(ehPrimeiroCartao) return;

esconderCartoesSelecionado();

// - passo 3 - fazer aparecer o cartão anterior da lista
cartaoAtual--;
mostrarCartao();

});
function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

