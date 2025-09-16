import { colors } from "../../styles/theme"
import styled from "styled-components";
import { slideInFromBottom, slideInFromTop, scaleIn } from "../../styles/animations";

export const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%);
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
  color: ${colors.text};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  animation: ${({ $isVisible }) => $isVisible ? slideInFromTop : 'none'} 0.8s ease-out forwards;
  opacity: 0;
`;

type ProjectsGridProps = {
  $isVisible: boolean;
};

export const ProjectsGrid = styled.div<ProjectsGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  animation: ${({ $isVisible }) => $isVisible ? slideInFromBottom : 'none'} 0.8s ease-out 0.2s forwards;
  opacity: 0;
`;

type ProjectCardProps = {
  $delay: number;
};

export const ProjectCard = styled.div<ProjectCardProps>`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px ${colors.background}15;
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.6s ease-out ${({ $delay }) => $delay}s forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px ${colors.primary}25;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 3rem;

   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.accent};
  margin-bottom: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
`;

export const ProjectDescription = styled.p`
  color: ${colors.background};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  background-color: ${colors.primary}15;
  color: ${colors.accent};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.9rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.background};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accent};
    transform: translateY(-5px);
  }
`;