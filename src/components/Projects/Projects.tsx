import {
  ProjectsSection,
  Container,
  SectionLabel,
  PromptLine,
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  ProjectNum,
  ProjectName,
  HighlightBadge,
  ProjectDesc,
  TagRow,
  Tag,
  Links,
  IconLink,
} from './styled'
 
import { projects } from './Components'
 
const Projects = () => {
  return (
    <ProjectsSection id="projetos">
      <Container>
        <SectionLabel>03. projects</SectionLabel>
 
        <PromptLine>
          <span className="user">voce</span>
          <span className="host">@portfolio ~$</span>
          <span className="cmd">git</span>
          <span className="flag">log</span>
          <span className="flag">--featured</span>
        </PromptLine>
 
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.num}
              $highlight={project.highlight}
              $delay={i * 80}
            >
              <ProjectHeader>
                <div>
                  <ProjectNum>./projects/{project.num}</ProjectNum>
                  <ProjectName>{project.name}</ProjectName>
                </div>
                {project.highlight && (
                  <HighlightBadge>★ destaque</HighlightBadge>
                )}
              </ProjectHeader>
 
              <ProjectDesc>{project.description}</ProjectDesc>
 
              <TagRow>
                {project.stack.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </TagRow>
 
              <Links>
                {project.github && (
                  <IconLink href={project.github} target="_blank" rel="noopener">
                    ⌥ github
                  </IconLink>
                )}
                {project.demo && (
                  <IconLink href={project.demo} target="_blank" rel="noopener">
                    ↗ live demo
                  </IconLink>
                )}
              </Links>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  )
}
 
export default Projects