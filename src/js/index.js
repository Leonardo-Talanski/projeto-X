// --Pegar todos os personagens para verificação de quando o usuário passar o mouse sobre eles.

const personagens = document.querySelectorAll('.personagem');
 
// --Adicionar a classe selecionado no personagem que o usuário passar sobre.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerwidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});

        }
        
        // --Verificar se já existe um personagem selecionado, se sim essa função abaixo irá removê-la.

        const personagemSelecionado = document.querySelector('.selecionado')
         personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // --Quando o mouse passar em cima do personagem na lista, trocar imagem, o nome e a descrição do personagem.

        // 1.1 --Pegar o elemento do personagem grande pra adicionar informações nele.

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // 1.2 --Alterar a imagem do personagem.

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // 1.3 --Alterar o nome do personagem.

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // 1.4 --Alterar a descrição do personagem.

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})




