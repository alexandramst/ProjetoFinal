// Animar o logo ao passar o rato por cima
const logo = document.getElementById('logo');

// Quando passas o rato por cima
logo.addEventListener('mouseenter', function() {
    this.src = 'images/animated_logo.gif'; // Muda para o GIF animado
});

// Quando retiras o rato de cima
logo.addEventListener('mouseleave', function() {
    this.src = 'images/Logotipo_Around_The_World.png'; // Volta à imagem estática
});

//Open and Close Modal
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique ao pin para abrir o modal
    const pin = document.getElementById('about-pin');
    pin.addEventListener('click', function() {
        $('#aboutMeModal').modal('show');
    });
});

//GIF INTRO
window.addEventListener('load', function() {
	setTimeout(function() {
		const introContainer = document.getElementById('intro-container');
		const introGif = document.getElementById('intro-gif');

		// Diminui o tamanho do GIF e aplica fade-out
		introGif.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out';
		introGif.style.transform = 'scale(0.5)';
		introGif.style.opacity = '0';

		// Aguarda a transição do GIF antes de ocultar o container
		setTimeout(function() {
			introContainer.style.display = 'none';
			document.body.style.overflow = 'auto'; // Habilita o scroll após a intro
		}, 1000);
	}, 4000); // 4000ms = 4 segundos para exibir o GIF inicialmente
});

// Ajusta o tamanho do carrossel quando o modal é mostrado
document.addEventListener('DOMContentLoaded', function() {
    $('#aboutMeModal').on('shown.bs.modal', function() {
        const carousel = document.getElementById('photo-carousel');
        if (carousel) {
            carousel.style.width = '100%';
            carousel.style.height = '300px';
        }
    });
});

// PIN interactivo
document.addEventListener('DOMContentLoaded', function() {
    const pin = document.getElementById('interactive-pin');
    const balloon = document.getElementById('interactive-balloon');
    let clickCount = 0;

    pin.addEventListener('mouseenter', function() {
        if (clickCount < 2) {
            const randomTop = Math.random() * 80 + 10; // Posição aleatória no ecrã
            const randomLeft = Math.random() * 80 + 10; // Posição aleatória no ecrã

            pin.style.top = randomTop + '%';
            pin.style.left = randomLeft + '%';
            clickCount++;
        } else if (clickCount === 2) {
            balloon.style.display = 'block'; // Mostra o balão
            setTimeout(() => {
                balloon.style.display = 'none'; // Esconde o balão após alguns segundos
            }, 2000);
            clickCount = 0; // Reinicia o contador
        }
    });
});

//PIN para mensagens
document.querySelectorAll('.motivational-pin').forEach(pin => {
    pin.addEventListener('mouseenter', () => {
        pin.style.transform = 'scale(1.2)'; // Aumenta ligeiramente o tamanho ao passar o cursor
    });

    pin.addEventListener('mouseleave', () => {
        pin.style.transform = 'scale(1)'; // Volta ao tamanho original
    });
});

// GLOBE
// Inicializar o Globo apenas em dispositivos móveis e tablets
// Inicializar o Globo apenas em dispositivos móveis e tablets
document.addEventListener('DOMContentLoaded', function () {
    const globeContainer = document.getElementById('globe-container');

    // Inicializar o globo com a biblioteca Globe.gl
    const globe = Globe()
        (globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg') // Textura do globo escuro
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Textura de relevo
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png') // Fundo de estrelas
        .pointsData([
            { lat: 38.7223, lng: -9.1393, label: 'About Me', modalId: '#aboutMeModal' }, // Portugal
            { lat: 40.7128, lng: -74.0060, label: 'Projects', modalId: '#projectsModal' }, // Nova York
            { lat: -41.2865, lng: 174.7762, label: 'Contacts', modalId: '#contactsModal' }, // Nova Zelândia
            { lat: 0, lng: 0, label: '😊', modalId: null, interactive: true } // Pin interativo
        ]) // Adicionando pontos no globo com as coordenadas geográficas
        .pointAltitude(0.01) // Altitude dos pins em relação à superfície do globo
        .pointColor(point => point.interactive ? '#00ff00' : '#E81E25') // Cor dos pins, interativo em verde
        .pointLabel('label') // Rótulo dos pins
        .pointRadius(3) // Aumentar o tamanho dos pins
        .onPointClick((point) => {
            if (point.modalId) {
                // Abrir o modal correspondente ao clicar em um pin
                $(point.modalId).modal('show');
            } else if (point.interactive) {
                // Lógica para o pin interativo
                interactivePinClickHandler(point);
            }
        })
        .width(window.innerWidth)
        .height(window.innerHeight - 60); // Ajuste para deixar espaço para o rodapé

    // Configuração inicial da visão
    globe.pointOfView({ altitude: 2.5 });

    // Contador de cliques para o pin interativo
    let interactivePinClickCount = 0;

    // Função para tratar o clique no pin interativo
    function interactivePinClickHandler(point) {
        interactivePinClickCount++;
        if (interactivePinClickCount < 3) {
            // Atualizar posição do pin para uma localização aleatória
            point.lat = Math.random() * 180 - 90; // Latitude aleatória entre -90 e 90
            point.lng = Math.random() * 360 - 180; // Longitude aleatória entre -180 e 180
            globe.pointsData([...globe.pointsData()]); // Atualizar os pontos do globo
        } else {
            alert("You can't catch me!");
            interactivePinClickCount = 0; // Reiniciar o contador
        }
    }

    // Função para ajustar a responsividade
    function handleResize() {
        globe.width(window.innerWidth).height(window.innerHeight - 60);
    }

    // Ajustar o tamanho ao carregar a página e ao redimensionar
    window.addEventListener('resize', handleResize);
    handleResize();
});