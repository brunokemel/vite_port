import {
  SkillsSection,
  Container,
  SectionLabel,
  PromptLine,
  SkillsGrid,
  SkillCard,
  CategoryLabel,
  TagRow,
  SkillTag,
} from './styled';
 
import { skillGroups } from './Components';
 
const Skills = () => {
  return (
    <SkillsSection id="habilidades">
      <Container>
        <SectionLabel>02. skills</SectionLabel>
 
        <PromptLine>
          <span className="user">voce</span>
          <span className="host">@portfolio ~$</span>
          <span className="cmd">ls</span>
          <span className="flag">--skills</span>
          <span className="flag">--all</span>
        </PromptLine>
 
        <SkillsGrid>
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} $delay={i * 70}>
              <CategoryLabel $color={group.color}>{group.category}</CategoryLabel>
              <TagRow>
                {group.items.map(skill => (
                  <SkillTag key={skill} $color={group.color}>
                    {skill}
                  </SkillTag>
                ))}
              </TagRow>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};
 
export default Skills;