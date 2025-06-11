import styled from 'styled-components';
import { 
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon
} from '@mui/icons-material';

import { colors } from "../../styles/theme"

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}05 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled.div`
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

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 3rem;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${colors.textLight};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${colors.primary}15;
  color: ${colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
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

const projects = [
  {
    title: 'Projeto E-commerce',
    description: 'Uma plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/seu-usuario/projeto-ecommerce',
    demo: 'https://projeto-ecommerce.demo'
  },
  {
    title: 'App de Gerenciamento',
    description: 'Aplicativo web para gerenciamento de tarefas e projetos com autenticação e dashboard interativo.',
    tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
    github: 'https://github.com/seu-usuario/app-gerenciamento',
    demo: 'https://app-gerenciamento.demo'
  },
  {
    title: 'Blog Pessoal',
    description: 'Blog desenvolvido com Next.js, incluindo sistema de comentários e integração com CMS.',
    tags: ['Next.js', 'GraphQL', 'Tailwind CSS', 'Prisma'],
    github: 'https://github.com/seu-usuario/blog-pessoal',
    demo: 'https://blog-pessoal.demo'
  }
];

export const Projects = () => {
  return (
    <ProjectsSection id="projetos">
      <Container>
        <Title>Meus Projetos</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                <CodeIcon />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    Código
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <LaunchIcon />
                    Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}; 