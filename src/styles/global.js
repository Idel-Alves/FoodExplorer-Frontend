import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.2%;
    } 

    body {
        /* width: 100%; */
        min-height: 100vh;
        /* position: relative; */
        /* overflow: hidden; */
        
        -webkit-font-smoothing: antialiased;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.TITLE_200};
    }

     p {
        color: ${({ theme }) => theme.COLORS.TITLE_200};
    }

    body, input, button, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        list-style: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;

         border: none;
         background: transparent;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
    
    ::-webkit-scrollbar {
         width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
`;