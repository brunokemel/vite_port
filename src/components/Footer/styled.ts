import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { fadeIn } from '../../styles/animations';

type FooterProps = {
  $isVisible: boolean;
};

export const Footer = styled.div<FooterProps>`
  text-align: center;
  padding: 1rem;
  color: ${colors.blue};
  font-size: 0.9rem;
  background: ${colors.red}, transparent;
  animation: ${({ $isVisible }) => $isVisible ? fadeIn : 'none'} 1s ease-out forwards;
  opacity: 0;
`;

