import { projects } from './Components'

import { 
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon
} from '@mui/icons-material';

import { 
  ProjectsSection,
  Container,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  Tag,
  ProjectLinks,
  ProjectLink
 } from "./styled"


const Projects = () => {
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

export default Projects;