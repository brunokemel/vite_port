import styled from 'styled-components';
import { 
  Code as CodeIcon,
  Storage as StorageIcon,
  Brush as BrushIcon,
  Devices as DevicesIcon
} from '@mui/icons-material';

import { colors} from "../../styles/theme"

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.background};
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px ${colors.primary}15;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px ${colors.primary}25;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.textLight};
  line-height: 1.6;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const skills = [
  {
    icon: <CodeIcon />,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    icon: <StorageIcon />,
    title: 'Backend',
    items: ['Node.js', 'Express', 'SQL', 'MongoDB', 'REST APIs']
  },
  {
    icon: <BrushIcon />,
    title: 'Design',
    items: ['Styled Components', 'Material UI', 'Responsive Design', 'UI/UX']
  },
  {
    icon: <DevicesIcon />,
    title: 'Ferramentas',
    items: ['Git', 'VS Code', 'npm', 'Postman', 'Figma']
  }
];

export const Skills = () => {
  return (
    <SkillsSection id="habilidades">
      <Container>
        <Title>Minhas Habilidades</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.items.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>{item}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}; 