document.addEventListener("DOMContentLoaded", () => {
  const playlist = JSON.parse(localStorage.getItem('reggaerootsPlaylist')) || [];
  const playlistEl = document.getElementById('playlistEl');
  const audioPlayer = document.getElementById('audioPlayer');
  let currentIndex = 0; // Índice da música atual

  // Gerar a lista de músicas dinamicamente
  playlist.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.dataset.index = index; // Armazena o índice da música no dataset
    li.addEventListener('click', () => {
      playSong(index); // Reproduzir a música clicada
    });
    playlistEl.appendChild(li);
  });

  // Função para tocar a música
  function playSong(index) {
    const song = playlist[index];
    audioPlayer.src = song.src;
    audioPlayer.play();
    currentIndex = index; // Atualiza o índice da música atual
    updatePlayerInfo(song);
  }

  // Função para atualizar informações do player
  function updatePlayerInfo(song) {
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const albumImage = document.getElementById('albumImage');
    
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    artistName.href = song.src; // Link direto para o áudio
    albumImage.src = "https://i.scdn.co/image/ab67616d00001e02ccdb0c63b7c823cf38974b5d"; // Imagem do álbum
  }

  // Tocar a primeira música assim que a página carrega
  playSong(currentIndex);

  // Avançar para a próxima música quando a atual terminar
  audioPlayer.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % playlist.length; // Próxima música, reinicia se chegar ao final
    playSong(currentIndex);
  });
});
