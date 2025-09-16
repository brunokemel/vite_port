import { styled } from 'styled-components';
import { colors } from '../../styles/theme';
import { slideInFromTop, slideInFromBottom, scaleIn } from '../../styles/animations';

export const SkillsSection = styled.section`
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

type SkillsGridProps = {
  $isVisible: boolean;
};

export const SkillsGrid = styled.div<SkillsGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
  animation: ${({ $isVisible }) => $isVisible ? slideInFromBottom : 'none'} 0.8s ease-out 0.2s forwards;
  opacity: 0;
`;

type SkillCardProps = {
  $delay: number;
};

export const SkillCard = styled.div<SkillCardProps>`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px ${colors.accent}15;
  transition: all 0.3s ease;
  text-align: center;
  animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay}s forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px ${colors.accent}25;
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${colors.background};
  margin-bottom: 1rem;
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.background};
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.accent};
  line-height: 1.6;
`;

export const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;
