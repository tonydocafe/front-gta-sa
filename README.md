# Página para seleção de personagens 

Este é um código que desenvolve uma página para a seleção de personagens. Na medida em que o usuário move o cursor do mouse sobre cada personagem, este é automaticamente selecionado e suas informações detalhadas são exibidas, incluindo a ampliação da sua imagem correspondente. 
Para visualizar o codigo : https://tonydocafe.github.io/front-gta-sa/


#### foram utlizados :

- hmtl
- css
- java script





## HTML

#### Cabeçalho (<head>):
Define o idioma como português brasileiro.
Configura o charset e a viewport.
Inclui fontes do Google e três arquivos CSS para resetar estilos, definir estilos personalizados e tornar a página responsiva.
#### Corpo da Página (<body>)
#### Cabeçalho (<header>):

Contém a logo do projeto GTA.
#### Seção Principal (<main>):

#### Seleção de Personagens (<section class="selecao-de-personagens">):

Inclui um título e uma lista de personagens, cada um com uma imagem e descrições específicas como atributos de dados (data-name e data-description).
#### Áudio de Fundo:

Um contêiner de áudio que toca automaticamente um arquivo de som quando a página é carregada.
Personagem Selecionado (<section class="personagem-selecionado">):

Exibe a imagem maior do personagem selecionado junto com seu nome e descrição.
#### Scripts
#### JavaScript:
Um arquivo index.js é referenciado, presumivelmente para adicionar funcionalidades dinâmicas como a troca de informações e imagens dos personagens selecionados.


## CSS
## estilos.css

#### Corpo da Página (body):

Usa a fonte "Oxanium" com estilo cursivo.
Fundo preto com texto branco.
Imagem de fundo sem repetição, centralizada e com opacidade de 20%.
#### Elemento Invisível de Áudio (.audio-container):

O contêiner de áudio é oculto.
#### Cabeçalho (.cabecalho)
Alinha o conteúdo ao centro usando flex.
##### Seção de Seleção de Personagens (.selecao-de-personagens)
Geral:

Exibe conteúdo em flex, centralizado vertical e horizontalmente, com espaçamento.
Ocupa a altura mínima da tela, descontando o tamanho do cabeçalho.
#### Lista de Personagens (.lista-de-personagens):

Disposição flexível e envolvente, com espaçamento consistente.
#### Detalhes dos Personagens (.personagens):

Organização vertical com alinhamento central e limite de largura.
Título estilizado com espaçamento entre letras, caixa alta, e borda inferior verde.
#### Estilos de Personagens
#### Imagens de Personagens (.lista-de-personagens .personagem img):

Imagens ocupam toda a largura e altura do contêiner.
#### Personagem Selecionado (.lista-de-personagens .personagem.selecionado):

Aplica uma sombra verde brilhante ao personagem selecionado.
#### Seção do Personagem Selecionado (.personagem-selecionado)
Geral:

Alinhamento central com altura máxima definida.
##### Imagem Grande do Personagem (.personagem-selecionado .personagem-grande):

Define dimensões específicas para a imagem.
#### Nome do Personagem (.personagem-selecionado .nome-personagem):

Título estilizado com borda inferior verde, espaçamento entre letras e caixa alta.
#### Descrição do Personagem (.personagem-selecionado .descricao-personagem):

Texto centralizado com tamanho e espaçamento definidos, margem superior e largura específica.

## reset.css

#### Margem (margin: 0;):

Remove todas as margens padrão dos elementos.
#### Preenchimento (padding: 0;):

Remove todos os preenchimentos padrão dos elementos.
#### Modelo de Caixa (box-sizing: border-box;):

Define o modelo de caixa de todos os elementos para border-box, o que significa que o padding e a borda serão incluídos na largura e altura totais do elemento. Isso facilita o controle de dimensões e layouts.


## responsivo.css

#### Regras de Mídia (@media(max-width: 1120px))
#### Logotipo no Cabeçalho (.cabecalho .logo):

Reduz a largura máxima da logo para 190px.
#### Seção de Seleção de Personagens (.selecao-de-personagens):

Muda a direção do layout para coluna inversa.
Define uma largura máxima de 430px e centraliza com margin: 0 auto.
#### Detalhes dos Personagens (.selecao-de-personagens .personagens):

Adiciona uma margem superior de 37px.
#### Título dos Personagens (.selecao-de-personagens .personagens .titulo):

Reduz o tamanho da fonte para 15px.
#### Lista de Personagens (.selecao-de-personagens .lista-de-personagens):

Reduz o espaçamento entre os personagens para 9px.
#### Imagens dos Personagens (.selecao-de-personagens .personagem img):

Define a largura das imagens dos personagens para 80px.
#### Personagem Selecionado
#### Imagem Grande do Personagem (.personagem-selecionado .personagem-grande):

Reduz as dimensões para 350px x 350px.
#### Descrição do Personagem (.personagem-selecionado .descricao-personagem):

Define a largura para 80% do contêiner.
Mantém o tamanho da fonte em 16px.
Centraliza com margin: 20px auto.


## JavaScript

#### Selecionando Elementos HTML
O código começa selecionando todos os elementos com a classe .personagem, que representam os personagens na página.
#### Adicionando Event Listeners
- Para cada personagem, um evento de mouse mouseenter é adicionado.
- Quando um usuário passa o mouse sobre um personagem:
- Se a largura da janela for inferior a 450 pixels, a página é rolada até o topo suavemente.
- A classe .selecionado é removida de qualquer personagem previamente selecionado.
- A classe .selecionado é adicionada ao personagem atual.
- Um som é reproduzido.
- A imagem e as informações do personagem selecionado são atualizadas.

#### Funções Auxiliares
#### alterarDescricaoDePersonagem(personagem):

Atualiza a descrição do personagem exibida na página com base nos atributos de dados do personagem.
#### alterarNomeDePersonagemSelecionado(personagem): 

Atualiza o nome do personagem selecionado exibido na página com base nos atributos de dados do personagem.
#### alterarImagemDePersonagemSelecionado(personagem): 

Atualiza a imagem do personagem selecionado exibida na página com base no ID do personagem.
#### removerSelecaoDoPersonagem():

Remove a classe .selecionado de qualquer personagem selecionado anteriormente.
#### reproduzirSom(): 

Reproduz um som quando um personagem é selecionado.

#### métodos e propriedades

##### querySelectorAll:
- metodo da interface Document.
- Seleciona todos os elementos do documento que correspodem a um seletor CSS especificado e retorna uma NodeList.
##### addEventListener:
- Um método da interface EventTarget.
- Anexa um manipulador de eventos a um elemento específico, permitindo que você responda a eventos como cliques, movimentos do mouse, etc.
##### window.innerWidth:
- Uma propriedade da interface Window.
- Retorna a largura interior da janela do navegador em pixels.
##### window.scrollTo:
- Um método da interface Window.
- Desloca a janela para uma posição específica.
##### forEach:
- Um método da interface Array e NodeList.
- Executa uma função fornecida uma vez para cada elemento de um array ou NodeList.
##### classList.add e classList.remove:
- Métodos da interface Element.classList.
- classList.add adiciona uma ou mais classes a um elemento. classList.remove remove uma ou mais classes de um elemento.
##### getAttribute:
- Um método da interface Element.
- Obtém o valor de um atributo de um elemento.
##### getElementById e querySelector:
- Métodos da interface Document.
- getElementById seleciona um elemento pelo seu ID. querySelector seleciona o primeiro elemento que corresponde a um seletor CSS especificado.
##### play:
- Um método da interface HTMLMediaElement.
- Reproduz o áudio ou vídeo associado ao elemento.



