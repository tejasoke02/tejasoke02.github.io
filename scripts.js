document.addEventListener('DOMContentLoaded', function() {
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');
    document.body.appendChild(lightboxOverlay);

    lightboxLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const img = document.createElement('img');
            img.src = link.href;
            while (lightboxOverlay.firstChild) {
                lightboxOverlay.removeChild(lightboxOverlay.firstChild);
            }
            lightboxOverlay.appendChild(img);
            lightboxOverlay.classList.add('active');
        });
    });

    lightboxOverlay.addEventListener('click', function() {
        lightboxOverlay.classList.remove('active');
    });
});