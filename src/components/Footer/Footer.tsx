import { Footer as StyledFooter } from "./styled"

const Footer = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Bruno Kemel Corrêa Matos. Todos os direitos reservados.</span>
      <span>Desenvolvido com ❤️ usando React+Vite e Styled Components</span>
    </StyledFooter>
  );
}

export default Footer