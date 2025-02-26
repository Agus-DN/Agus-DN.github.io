(function () {
    // Agregar preconexiones para mejorar el rendimiento
    const preconnectUrls = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com"
    ];

    preconnectUrls.forEach(url => {
        let link = document.createElement("link");
        link.rel = "preconnect";
        link.href = url;
        if (url.includes("gstatic")) {
            link.crossOrigin = "anonymous";
        }
        document.head.appendChild(link);
    });

    // Agregar los estilos de fuentes
    const fonts = [
        "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap",
        "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap",
        "https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap",
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    ];

    fonts.forEach(font => {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = font;
        document.head.appendChild(link);
    });
})();
