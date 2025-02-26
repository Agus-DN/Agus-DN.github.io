window.addEventListener("load", function () {
    let url = window.location.pathname.toLowerCase(); // Obtener la URL
    let lang = url.includes("/eng/") ? "en" : "es"; // Detectar idioma basado en la URL

    // Esperar hasta que los loaders existan en el DOM
    setTimeout(() => {
        let loaderEs = document.getElementById("loader-es");
        let loaderEn = document.getElementById("loader-en");

        // Mostrar solo el loader correcto
        let loader = lang === "en" ? loaderEn : loaderEs;
        if (loader) {
            loader.style.display = "flex"; // Asegurar que se vea

            // Mantener la animación de fade-out
            setTimeout(() => {
                loader.style.transition = "opacity 1.5s ease-out";
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none"; // Ocultarlo completamente después del fade-out
                }, 2500);
            }, 2000); // Se muestra mínimo 1s antes de iniciar fade-out
        }
    }, 100); // Pequeño delay para asegurar que los elementos se carguen
});
