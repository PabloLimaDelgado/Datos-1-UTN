document.addEventListener("DOMContentLoaded", function() {
    const paginaMainIndex = document.documentElement;  // Esto seleccionará el elemento <html>

    function pagina100PorCiento(event, page) {
        event.preventDefault();
        if (page.scrollHeight <= window.innerHeight) {
            page.classList.add('html-init');
        } else {
            page.classList.remove('html-init');
        }

        console.log(page.scrollHeight);
        console.log(window.innerHeight);
    }

    pagina100PorCiento(paginaMainIndex);
});
