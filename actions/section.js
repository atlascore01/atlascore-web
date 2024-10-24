document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll('.service-item');

    // Configuración de Intersection Observer
    const observerOptions = {
        threshold: 0.1 // El 10% del elemento debe ser visible para que se active
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento está visible, añadimos la clase 'visible'
                entry.target.classList.add('visible');
            } else {
                // Si el elemento ya no está visible, removemos la clase 'visible'
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observamos cada servicio
    services.forEach(service => {
        observer.observe(service);
    });
});
