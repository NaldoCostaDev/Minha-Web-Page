
// Função para reproduzir a música de fundo
function playBackgroundMusic() {
    // URL da música de fundo
    var audio = new Audio("audio/13.mp3");
    audio.play(); // Reproduz a música
}

// função de reprodução de música
document.getElementById('logo').addEventListener('click', playBackgroundMusic); 

document.addEventListener('DOMContentLoaded', () => {
    const menuMobile = document.querySelector('.menu-mobile');
    const menuListar = document.querySelector('.menu-lista');
    const btnFechar = document.querySelector('.btn-fechar');
    const menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');

    menuListar.addEventListener('click', () => {
        menuMobile.classList.add('active');
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuMobile.contains(event.target);
        const isClickOnHamburguer = menuListar.contains(event.target);

        if (!isClickOnHamburguer && menuMobile.classList.contains('active')) {
            if (!isClickInsideMenu || event.target.classList.contains('btn-fechar') || event.target.closest('.btn-fechar')) {
                menuMobile.classList.remove('active');
            }
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.remove('active');
        });
    });
});

