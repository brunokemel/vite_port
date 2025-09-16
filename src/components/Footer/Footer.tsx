import { Footer as StyledFooter } from "./styled"
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <StyledFooter ref={ref} $isVisible={isVisible}>
      <span>© {new Date().getFullYear()} Bruno Kemel Corrêa Matos. Todos os direitos reservados.</span>
      <span>Desenvolvido com ❤️ usando React+Vite e Styled Components</span>
    </StyledFooter>
  );
}

export default Footer