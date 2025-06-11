import { colors } from "../../styles/theme"
import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px ${colors.primary}15;
  transition: all 0.3s ease;

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
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  color: ${colors.textLight};
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
  color: ${colors.primary};
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
  color: ${colors.primary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary};
  }
`;