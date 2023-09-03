const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const edad = document.getElementById('edad')
const año_curso = document.getElementById('año_curso')
const fecha_ingreso = document.getElementById('fecha_ingreso')
const carrera1 = document.getElementById('carrera1')
const carrera2 = document.getElementById('carrera2')

const section_form = document.querySelector('.section_form')
const section_resultado = document.querySelector('.section_resultado')

const campos = [nombre, apellido, edad, año_curso, fecha_ingreso];

const btn_form = document.getElementById('btn_form')
const btn_volver = document.getElementById('btn_volver')
function verificarCampos() {
    const algunoVacios = campos.some(campo => campo.value === "");

    if(algunoVacios == true) {
        btn_form.disabled = true;
    } else {
        btn_form.disabled = false;
    }
}

campos.forEach(campo => {
    campo.addEventListener('input', verificarCampos);
});

btn_form.addEventListener('click', (e) => {
        e.preventDefault();

        const blackouts = document.querySelectorAll('.blackout');

        blackouts.forEach(blackout => {
            blackout.style.opacity = "1";

            setTimeout(() => {
                blackout.style.opacity = 0;
                section_form.style.display = 'none'
                section_resultado.style.display = 'flex'
            }, 2000);
        });

        const result_nombre = document.getElementById('result_nombre')
        const result_apellido = document.getElementById('result_apellido')
        const result_edad = document.getElementById('result_edad')
        const result_curso = document.getElementById('result_curso')
        const result_fecha_ingreso = document.getElementById('result_fecha_ingreso')
        const result_carrera1 = document.getElementById('result_carrera1')
        const result_carrera2 = document.getElementById('result_carrera2')

        result_nombre.textContent =  `${nombre.value}`
        result_apellido.textContent = `${apellido.value}`
        result_edad.textContent = `${edad.value}`
        result_curso.textContent = `${año_curso.value}`
        result_fecha_ingreso.textContent = `${fecha_ingreso.value}`
        result_carrera1.textContent = `${carrera1.value}`
        result_carrera2.textContent = `${carrera2.value}`

})

btn_volver.addEventListener('click', (e) =>{
    e.preventDefault()

    const blackouts = document.querySelectorAll('.blackout');

    blackouts.forEach(blackout => {
        blackout.style.opacity = "1";

        setTimeout(() => {
            blackout.style.opacity = 0;
            section_form.style.display = 'flex'
            section_resultado.style.display = 'none'
        }, 2000);
    });

    nombre.value = " "
    apellido.value = " "
    edad.value = " "
    año_curso.value = " "
    fecha_ingreso.value = " "
    fecha_ingreso.value = " "
    carrera1.value = " "
    carrera2.value = " "

    verificarCampos()
})

verificarCampos()