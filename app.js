// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const fondo = document.querySelector(".fondo");
    const loginLink = document.querySelector(".login-link"); // Corregido: Cambié a "login-link" en minúscula
    const registrarLink = document.querySelector(".registrar-link");
    const btn = document.querySelector(".btn");
    const iconoCerrar = document.querySelector(".icono-cerrar");

    // Mostrar formulario de registro
    registrarLink.addEventListener("click", () => {
        fondo.classList.add('active');   
    });

    // Mostrar formulario de inicio de sesión
    loginLink.addEventListener("click", () => {
        fondo.classList.remove('active');
    });

    // Botón para abrir el formulario de inicio de sesión
    btn.addEventListener("click", () => {
        fondo.classList.add("active-btn");
    });

    // Cerrar el formulario
    iconoCerrar.addEventListener("click", () => {
        fondo.classList.remove('active-btn');
    });
});
