import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');
  *,
*::after,
*::before {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
picture {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}

  body {
    overflow: hidden;
    background: white;
    color: hsl(192, 100%, 9%);
    font-family: 'Public Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
`;
export default GlobalStyles;