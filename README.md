# Reggaeroots Radio Player

Este projeto é um **player de rádio online** inspirado na banda **Reggaeroots**, permitindo aos usuários ouvir suas músicas diretamente do navegador. O player inclui controles básicos, como play, pause, próxima, anterior, volume e mute, além de exibir a capa do álbum, título da música e o artista. A interface é simples e acessível, com uma playlist de músicas da banda, podendo ser facilmente personalizada.

## Funcionalidades

- **Reprodução de Música**: Toca músicas de uma playlist definida com opção de controlar a reprodução.
- **Controles de Navegação**: Através dos botões de **Play/Pause**, **Próxima** e **Anterior**, é possível controlar a música que está tocando.
- **Controles de Volume**: Ajuste do volume através de um slider com suporte a mute.
- **Exibição de Título e Artista**: A música atual, juntamente com o nome do artista, é exibida na interface.
- **Lista de Reprodução**: A lista de músicas pode ser acessada e selecionada diretamente pelo usuário.

## Estrutura de Arquivos

```plaintext
index.html            # Arquivo principal do player de rádio
player.js            # funções principais do player de rádio
styles.css            # Arquivo de estilo para o layout do player
```

### 1. `index.html`
Contém a estrutura HTML do player, incluindo os controles, exibição da capa do álbum e a lista de reprodução.

### 2. `styles.css`
Estilos para personalizar a aparência do player, ajustando as cores, tamanhos e disposição dos elementos.

### 3. `player.js`
Funções dos botões e da funcionalidade.

## Como Usar

1. **Baixar ou clonar o repositório:**

```bash
git clone https://github.com/alemaodacapa/reggaeroots-radio-player.git
```

2. **Abrir o arquivo `index.html`:**

Abra o arquivo `index.html` em um navegador para iniciar o player.

## Como Funciona

- O **player de rádio** carrega uma lista de músicas que estão hospedadas em um servidor remoto.
- Cada música tem sua URL associada no formato MP3.
- A **interface** do player exibe a capa do álbum, o título da música e o nome do artista.
- Os **botões de navegação** permitem pular para a próxima música ou voltar à anterior.
- O **slider de volume** ajusta o volume de áudio, enquanto o botão de **mute** ativa ou desativa o som.

## Playlist

A playlist do player é composta por várias músicas da banda **Reggaeroots**. Exemplo de algumas faixas:

- Funk do Terror
- Bararabembembem
- Lembranças Remix
- Luz do Neon
- Não Pare Dance
- Promessas Prometo
- Saudades

A lista de músicas é carregada dinamicamente na interface e o usuário pode selecionar uma música clicando nela.

## Tecnologias Usadas

- **HTML5**: Para estruturar o player e a interface do usuário.
- **CSS3**: Para os estilos e layout do player.
- **JavaScript**: Para a lógica de controle de áudio e interatividade do player.
- **GSAP**: Biblioteca para animações (importada, mas não utilizada no código atual).

## Personalização

Se desejar adicionar ou remover músicas, basta editar o array `playlist` no código JavaScript. Cada música no array deve ter os seguintes atributos:

- `src`: O URL do arquivo MP3.
- `title`: O título da música.
- `artist`: O nome do artista.

## Contribuindo

Se desejar contribuir com este projeto, siga os seguintes passos:

1. Fork este repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/feature-name`).
3. Comite suas mudanças (`git commit -m 'Add new feature'`).
4. Envie para o repositório original (`git push origin feature/feature-name`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
