import { ThemeProvider } from 'styled-components';
import { colors, breakpoints } from './styles/theme';
import  Navbar  from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import  Skills  from './components/Skills/Skills';
import  Projects  from './components/Projects/Projects';
import  Contact  from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from '../createGlobalStyle'
import styled from 'styled-components';


const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.background};
`;


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
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
