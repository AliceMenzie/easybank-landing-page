import { ThemeProvider } from "styled-components";
import Article from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./components/styles/Global";

function App() {
  const theme = {
    colors: {
      greyBlue: "hsl(233, 8%, 62%)",
      lightGreyBlue: "hsl(220, 16%, 96%)",
      lightGrey: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
      darkBlue: "hsl(233, 26%, 24%)",
      limeGreen: "hsl(136, 65%, 51%)",
      brightCyan: "hsl(192, 70%, 51%)",
    },
    // mobile: "768px"
    tablet: "645px",
    mobile: "375px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main/>
        <Article/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
