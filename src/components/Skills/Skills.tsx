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
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollAnimationTitle } from '../../hooks/useScrollAnimationTitle';

  const Skills = () => {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimationTitle();
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

    return (
      <SkillsSection id="habilidades">
        <Container>
          <Title ref={titleRef} $isVisible={titleVisible}>Minhas Habilidades</Title>
          <SkillsGrid ref={gridRef} $isVisible={gridVisible}>
            {skills.map((skill, index) => (
              <SkillCard key={index} $delay={index * 0.1}>
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