document.addEventListener('DOMContentLoaded', () => {

    const animatedElements = document.querySelectorAll('.animated-image, .animated-text');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const buttons = document.querySelectorAll('.button, .button-secundario, .button-overlay');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log(`Se hizo clic en un botón. Clases del elemento: ${event.target.className}`);
        });
    });

    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            console.log(`Se hizo clic en el icono social. Clases del elemento: ${event.target.className}`);
        });
    });
});