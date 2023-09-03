document.addEventListener("DOMContentLoaded", function() {
    const paginaMainIndex = document.documentElement;  // Esto seleccionará el elemento <html>

<<<<<<< HEAD
    function pagina100PorCiento(event, page) {
        event.preventDefault();
=======
    function pagina100PorCiento(page) {
>>>>>>> b61170951638790cedbda9404bc3fd6ac2a23eeb
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
