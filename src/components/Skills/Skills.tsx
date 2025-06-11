import {
  SkillsSection,
  Container,
  Title,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillTitle,
  SkillList,
  SkillItem
} from './styled'

import { skills } from './Components';

  const Skills = () => {
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

export default Skills;