import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { fadeIn } from '../../styles/animations';

type FooterProps = {
  $isVisible: boolean;
};

export const Footer = styled.div<FooterProps>`
  text-align: center;
  padding: 2rem;
  color: ${colors.accent};
  font-size: 0.9rem;
  background: linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%);
  animation: ${({ $isVisible }) => $isVisible ? fadeIn : 'none'} 1s ease-out forwards;
  opacity: 0;
`;

