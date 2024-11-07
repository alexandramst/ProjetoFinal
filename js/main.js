// Generate circles for Code-Pen Space and Stars Animation 
// for (let i = 0; i < 20; i++) {
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
//     circle.style.width = circle.style.height = `${Math.random() * 30 + 10}px`;
//     circle.style.top = `${Math.random() * 100}%`;
//     circle.style.left = `${Math.random() * 100}%`;
//     circle.style.animationDuration = `${Math.random() * 25 + 20}s`;
//     document.getElementById('animation-container').appendChild(circle);
// }

let sky, center;

function dot(i) {
    const size = Math.round(Math.random() + 1);
    const root = document.createElement('span');
    root.style.top = `${Math.random() * 100}%`;
    root.style.left = `${Math.random() * 100}%`;
    root.classList.add('star', `size-${size}`);
    root.style.animation = `anim ${Math.random() * 5 + 3}s linear infinite, fade ${Math.random() * 10 + 8}s ease-in-out infinite`;
    return root;
}

function clear() {
    sky.innerHTML = '';
}

function init() {
    sky = document.querySelector('#sky');
    center = {
        x: sky.clientWidth / 2,
        y: sky.clientHeight / 2,
    };
    clear();
    for (let i = 0; i < 360; i++) sky.appendChild(dot(i));
}

window.onload = init;

//Open and Close Modal
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique ao pin para abrir o modal
    const pin = document.getElementById('about-pin');
    pin.addEventListener('click', function() {
        $('#aboutMeModal').modal('show');
    });
});

//GIF INTRO
function initIntroStars() {
    const introSky = document.querySelector('#intro-sky');
    for (let i = 0; i < 360; i++) {
        const size = Math.round(Math.random() + 1);
        const star = document.createElement('span');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.classList.add('star', `size-${size}`);
        star.style.animation = `anim ${Math.random() * 5 + 3}s linear infinite, fade ${Math.random() * 10 + 8}s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite`;
        introSky.appendChild(star);
    }
}

window.addEventListener('load', function() {
    initIntroStars(); // Inicializa as estrelas na animação do GIF

    setTimeout(function() {
        const introContainer = document.getElementById('intro-container');
        const introGif = document.getElementById('intro-gif');
        
        // Diminui o tamanho do GIF e aplica fade-out
        introGif.style.transform = 'scale(0.5)';
        introGif.style.opacity = '0';

        // Aguarda a transição do GIF antes de ocultar o container
        setTimeout(function() {
            introContainer.classList.add('hidden');
        }, 2000); // 2000ms = 2 segundos para corresponder ao tempo de transição
    }, 4000); // 4000ms = 4 segundos para exibir o GIF inicialmente
});

