import { Footer as StyledFooter } from "./styled"

const Footer = () => {
  return (
    <StyledFooter>
      <span>© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</span>
      <span>Desenvolvido com ❤️ usando React e Styled Components</span>
    </StyledFooter>
  );
}

export default Footer