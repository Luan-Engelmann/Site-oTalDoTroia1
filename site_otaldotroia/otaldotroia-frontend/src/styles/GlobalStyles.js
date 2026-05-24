import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Importação de Fontes Google */
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@300;400;600;700&display=swap');

    :root {
        /* Paleta Gamer */
        --color-dark: #121217;       
        --color-medium-dark: #1A1A21; 
        --color-purple: #9900FF;     
        --color-blue: #00CCFF;       
        --color-text: #E0E0E0;
        
        --font-primary: 'Poppins', sans-serif;
        --font-display: 'Orbitron', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-primary);
        background-color: var(--color-dark);
        color: var(--color-text);
        min-height: 100vh;
        
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    h1, h2, h3 {
        font-family: var(--font-display);
        color: var(--color-text);
    }
    
    a {
        text-decoration: none;
        color: var(--color-blue);
        transition: color 0.3s ease;
    }
`;

export default GlobalStyles;