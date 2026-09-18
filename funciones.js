// =======================================================
// LÓGICA DEL EJERCICIO 4: FIGURAS, ÁREA Y PERÍMETRO
// =======================================================

// Figuras personalizadas con colores vivos y degradados propios
const svgFiguras = {
    cuadrado: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradCuadrado" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff9a9e; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#fecfef; stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="15" y="15" width="70" height="70" rx="12" fill="url(#gradCuadrado)" stroke="#ff6b6b" stroke-width="3"/>
        </svg>`,
    rectangulo: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradRect" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#a1c4fd; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#c2e9fb; stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="10" y="25" width="80" height="50" rx="10" fill="url(#gradRect)" stroke="#3498db" stroke-width="3"/>
        </svg>`,
    triangulo: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradTri" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#84fab0; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8fd3f4; stop-opacity:1" />
                </linearGradient>
            </defs>
            <polygon points="50,12 12,88 88,88" fill="url(#gradTri)" stroke="#2ecc71" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
    circulo: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradCirc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#fccb90; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#d57eeb; stop-opacity:1" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="36" fill="url(#gradCirc)" stroke="#9b59b6" stroke-width="3"/>
        </svg>`,
    trapecio: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradTrap" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffecd2; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#fcb69f; stop-opacity:1" />
                </linearGradient>
            </defs>
            <polygon points="28,22 72,22 88,78 12,78" fill="url(#gradTrap)" stroke="#e67e22" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
    pentagono: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradPent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff758c; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ff7eb3; stop-opacity:1" />
                </linearGradient>
            </defs>
            <polygon points="50,12 88,40 74,84 26,84 12,40" fill="url(#gradPent)" stroke="#c0392b" stroke-width="3" stroke-linejoin="round"/>
        </svg>`,
    octagono: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradOct" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#43e97b; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#38f9d7; stop-opacity:1" />
                </linearGradient>
            </defs>
            <polygon points="32,14 68,14 86,32 86,68 68,86 32,86 14,68 14,32" fill="url(#gradOct)" stroke="#16a085" stroke-width="3" stroke-linejoin="round"/>
        </svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    const figuraSelect = document.getElementById('figura-select');
    const inputNumero = document.getElementById('in-1');
    const inputArea = document.getElementById('res-area');
    const inputPerimetro = document.getElementById('res-perimetro');
    const btnMostrar = document.getElementById('btn-mostrar');
    const contentFigure = document.getElementById('content-figure');

    if (!figuraSelect) return;

    // Mostrar la figura de color dinámicamente cuando el usuario la selecciona
    figuraSelect.addEventListener('change', function() {
        const figura = this.value;
        contentFigure.innerHTML = svgFiguras[figura] || '';
    });

    // Acción al hacer clic en el botón "Mostrar" para calcular el área y perímetro
    btnMostrar.addEventListener('click', function() {
        const figura = figuraSelect.value;
        const valor = parseFloat(inputNumero.value);

        if (!figura) {
            alert('Por favor selecciona una figura.');
            return;
        }

        if (isNaN(valor) || valor <= 0) {
            alert('Por favor ingresa un número válido mayor a 0.');
            return;
        }

        let area = 0;
        let perimetro = 0;

        switch (figura) {
            case 'cuadrado':
                area = valor * valor;
                perimetro = 4 * valor;
                break;
            case 'rectangulo':
                area = valor * (valor * 1.5);
                perimetro = 2 * (valor + (valor * 1.5));
                break;
            case 'triangulo':
                area = (Math.sqrt(3) / 4) * Math.pow(valor, 2);
                perimetro = 3 * valor;
                break;
            case 'circulo':
                area = Math.PI * Math.pow(valor, 2);
                perimetro = 2 * Math.PI * valor;
                break;
            case 'trapecio':
                area = ((valor + (valor * 1.2)) / 2) * valor;
                perimetro = valor * 4; 
                break;
            case 'pentagono':
                perimetro = 5 * valor;
                area = (5 * Math.pow(valor, 2)) / (4 * Math.tan(Math.PI / 5));
                break;
            case 'octagono':
                perimetro = 8 * valor;
                area = 2 * (1 + Math.SQRT2) * Math.pow(valor, 2);
                break;
        }

        inputArea.value = area.toFixed(2);
        inputPerimetro.value = perimetro.toFixed(2);
    });
});