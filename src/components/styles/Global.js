import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); */
  * {
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
    background: white;
    color: hsl(192, 100%, 9%);
    font-family: sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
`
  export default GlobalStyles