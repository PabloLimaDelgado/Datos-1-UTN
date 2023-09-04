const apellido = document.getElementById('apellido')
const nombre = document.getElementById('nombre')
const numero_dni = document.getElementById('numero_dni')
const fecha_nacimiento = document.getElementById('fecha_nacimiento')
const domicilio = document.getElementById('domicilio')
const localidad = document.getElementById('localidad')

const texto = document.getElementById('texto')

const btnEnviar = document.getElementById('btnEnviar')
const btnBorrar = document.getElementById('btnBorrar')

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let output = "";

    document.querySelectorAll("input[name='idioma']:checked").forEach(checkbox => {
        let idioma = checkbox.id;
        let nivel = document.getElementById("nivel" + idioma.charAt(0).toUpperCase() + idioma.slice(1));

        if (nivel) {
            output += `<p><b>Idioma:</b> ${idioma.charAt(0).toUpperCase() + idioma.slice(1)}, <b>Nivel:</b> ${nivel.value}</p>`;
        }
    });
    texto.style.display = "flex"
    texto.innerHTML = `
    <h2>Los datos son:</h2>
    <section>
        <div class="datos">
            <p><b>Apellido:</b> ${apellido.value}</p>
            <p><b>Nombre:</b> ${nombre.value}</p>
            <p><b>Numero dni:</b> ${numero_dni.value}</p>
            <p><b>Domicilio:</b> ${domicilio.value}</p>
            <p><b>Localidad:</b> ${localidad.value}</p>
        </div>

        <div class="idiomas">
        ${output}
        </div>
    </section>
    `;
});

btnBorrar.addEventListener('click', (e) =>{
    e.preventDefault()
    texto.style.display = "none"

    apellido.value = ""
    nombre.value = ""
    numero_dni.value = ""
    domicilio.value = ""
    localidad.value = ""

    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelectorAll("input[type='range']").forEach(range => {
        range.value = range.defaultValue;
    });
})

function desabilitarButton() {
    if (apellido.value && nombre.value && numero_dni.value && fecha_nacimiento.value && domicilio.value && localidad.value) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}
apellido.addEventListener('input', desabilitarButton);
nombre.addEventListener('input', desabilitarButton);
numero_dni.addEventListener('input', desabilitarButton);
fecha_nacimiento.addEventListener('input', desabilitarButton);
domicilio.addEventListener('input', desabilitarButton);
localidad.addEventListener('input', desabilitarButton);

desabilitarButton()