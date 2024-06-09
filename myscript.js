
// Função para reproduzir a música de fundo
function playBackgroundMusic() {
    // URL da música de fundo
    var audio = new Audio("audio/13.mp3");
    audio.play(); // Reproduz a música
}

// função de reprodução de música
document.getElementById('logo').addEventListener('click', playBackgroundMusic); 

