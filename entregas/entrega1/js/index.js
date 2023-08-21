const paginaMainIndex = document.documentElement; // Esto seleccionará el elemento <body>

function pagina100PorCiento(page) {
    window.addEventListener("DOMContentLoaded", (event) => {
        if (page.scrollHeight > screen.height) {
            page.classList.remove('html-init');
        } else {
            page.classList.add('html-init');
        }
    });
}
pagina100PorCiento(paginaMainIndex);


/*const htmlMain = document.getElementById('htmlMain') 

if (htmlMain.scrollHeight < screen.height) {
    htmlMain.classList.add('html-init')
} */