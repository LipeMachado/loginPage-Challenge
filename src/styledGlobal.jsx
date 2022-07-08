import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;
        --white-200: #F7FAFC;
        --gray: #1A202C;
        --green-light: #04C35C;
        --purple-light: #2B6CB0;  
    }

    * {
        margin: 0;
        padding: 0;
    }
`;