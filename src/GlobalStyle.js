import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: grey;
    color: white;
    font-family: 'Poppins', sans-serif;
  }`

export default GlobalStyle;