// Objetivo 1 - quando clicar no botão de troca de temoa, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam apllicados e mude a imagem para lua

const botaoAlterarTema = document.getElementById('botao-alterar-tema')

const body = document.querySelector('body')

const imagemBotaoTrocaDeTema = document.querySelector('.imagem-botao')

botaoAlterarTema.addEventListener('click', () => {
  const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')

  if (modoEscuroEstaAtivo) {
    body.classList.remove('modo-escuro')
    imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/sun.png')
  } else {
    body.classList.add('modo-escuro')

    imagemBotaoTrocaDeTema.setAttribute('src', './src/imagens/moon.png')
  }
})
