
const personagens = document.querySelectorAll('.personagem');



personagens.forEach((personagem)=> {
    personagem.addEventListener('mouseenter',()=>{
        
        if(window.innerWidth < 450 ){
            window.scrollTo({top : 0, behavior : 'smooth'});
        }
        
        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');
       
        reproduzirSom();

        alterarImagemDePersonagemSelecionado(personagem);


        alterarNomeDePersonagemSelecionado(personagem);


        alterarDescricaoDePersonagem(personagem);

        

        

    })
})

function alterarDescricaoDePersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDePersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
function reproduzirSom() {
    var audio = document.getElementById("meu-audio");
    audio.play();
  }