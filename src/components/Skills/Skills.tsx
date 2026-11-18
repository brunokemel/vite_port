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
  GroupDescription,
  SkillsIntro,
} from './styled';
 
import { skillGroups } from './Components';
 
const Skills = () => {
  return (
    <SkillsSection id="habilidades">
      <Container>
        <SectionLabel>02. habilidades</SectionLabel>
 
        <PromptLine>
          <span className="user">BRUNO KEMEL</span>
          <span className="host">·</span>
          <span className="cmd">BACK-END</span>
          <span className="flag">APIs · AUTOMAÇÃO · INTEGRAÇÕES</span>
        </PromptLine>

        <SkillsIntro>
          Competências em desenvolvimento de APIs, automação de processos e integração de sistemas, com experiência complementar em interfaces web e bancos de dados.
        </SkillsIntro>
 
        <SkillsGrid>
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} $delay={i * 60} $featured={group.featured}>
              <CategoryLabel $color={group.color}>{group.category}</CategoryLabel>
              <GroupDescription>{group.description}</GroupDescription>
              <TagRow>
                {group.items.map(({ name, icon: Icon, iconColor }) => (
                  <SkillTag key={name} $color={group.color} title={name}>
                    <Icon aria-hidden="true" style={{ color: iconColor }} />
                    <span>{name}</span>
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
