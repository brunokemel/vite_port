import { ThemeProvider } from 'styled-components';
import { colors, breakpoints } from './styles/theme';
import styled, { createGlobalStyle } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
`;

// const FooterContainer = styled.footer`
//   text-align: center;
//   padding: 2rem;
//   color: ${colors.textLight};
//   font-size: 0.9rem;
//   background: linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%);
// `;

function App() {
  return (
    <ThemeProvider theme={breakpoints}>
      <>
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
         {/* <FooterContainer>
            <span>© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</span>
        </FooterContainer> */}
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
