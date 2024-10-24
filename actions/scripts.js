document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('label.card');
    const videos = document.querySelectorAll('label.card video');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            videos.forEach(video => {
                video.pause();  // Pausar todos los videos
                video.currentTime = 0;  // Reiniciar el video al principio
            });
            
            // Encontrar el video dentro de la card seleccionada y reproducirlo
            const video = card.querySelector('video');
            if (video) {
                video.play();
            }
        });
    });
});
