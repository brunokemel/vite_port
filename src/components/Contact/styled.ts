import styled from "styled-components";
import { colors } from "../../styles/theme";
import { slideInFromTop, slideInFromBottom, scaleIn } from "../../styles/animations";

export const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

type TitleProps = {
  $isVisible: boolean;
};

export const Title = styled.h2<TitleProps>`
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  animation: ${({ $isVisible }) => $isVisible ? slideInFromTop : 'none'} 0.8s ease-out forwards;
  opacity: 0;
`;

type ContactGridProps = {
  $isVisible: boolean;
};

export const ContactGrid = styled.div<ContactGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  animation: ${({ $isVisible }) => $isVisible ? slideInFromBottom : 'none'} 0.8s ease-out 0.2s forwards;
  opacity: 0;
`;

type ContactCardProps = {
  $delay: number;
};

export const ContactCard = styled.div<ContactCardProps>`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px ${colors.success}15;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay}s forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px ${colors.primary}25;
  }
`;

export const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: ${colors.accent};
  margin-bottom: 1rem;
`;

export const ContactTitle = styled.h3`
  font-size: 1.25rem;
  color: ${colors.accent};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const ContactInfo = styled.p`
  color: ${colors.accent};
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const ContactLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary};
  }
`;