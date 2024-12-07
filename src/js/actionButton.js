document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    if (!whatsappButton) {
        console.error("Botões não encontrados. Verifique os IDs no HTML.");
        return;
    }

    function toggleButtons() {
        const shouldShow = window.scrollY > 200;
        whatsappButton.classList.toggle('show', shouldShow);
    }

    document.addEventListener('scroll', toggleButtons);


    whatsappButton.addEventListener('click', function () {
        window.open('https://wa.me/message/6G4BFG2XBSRQP1', '_blank');
    });
});