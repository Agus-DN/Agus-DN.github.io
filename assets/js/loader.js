window.addEventListener("load", function () {
    let loader = document.querySelector(".loader-wrap");

    if (loader) {
        loader.style.transition = "opacity 1.5s ease-out"; // 1.5 segundos para un fade-out más suave
setTimeout(() => {
    loader.style.display = "none";
}, 2500); // Ajustado al tiempo de la animación
    }
});
