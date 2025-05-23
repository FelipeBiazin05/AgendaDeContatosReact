import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    background-color: ${variaveis.corDeFundo};
    background-image: linear-gradient(0deg, ${variaveis.corDeFundo}, ${variaveis.corPrincipal} );
}
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
`

export default GlobalStyle
