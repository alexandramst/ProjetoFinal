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
