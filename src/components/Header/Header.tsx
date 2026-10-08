import {
  HeaderContainer,
  Container,
  PromptLine,
  OutputBlock,
  Line,
  Divider,
  Avatar,
  SocialRow,
  SocialLink,
  CvButton,
  Cursor,
  ScrollHint,
} from './styled'
 
const Header = () => {
  return (
    <HeaderContainer id="inicio">
      <Container>
        <Avatar
          src="https://github.com/brunokemel.png"
          alt="Bruno Kemel"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/64/1e1e1e/4ade80?text=BK'
          }}
        />

        {/* Prompt */}
        <PromptLine>
          <span className="user">brunokemel</span>
          <span>@portfolio ~$</span>
          <span className="cmd">cat</span>
          <span className="flag">about.json</span>
        </PromptLine>
 
        {/* Output */}
        <OutputBlock>
          <Line>
            <span className="key">name:</span>
            <span className="val green">"Bruno Kemel"</span>
          </Line>
          <Line>
            <span className="key">role:</span>
            <span className="val">"Backend Developer | RPA"</span>
          </Line>
          <Line>
            <span className="key">location:</span>
            <span className="val">"Belém, Pará — Brasil"</span>
          </Line>
          <Line>
            <span className="key">focus:</span>
            <span className="amber">"APIs · Automação · Integrações"</span>
          </Line>
          <Line>
            <span className="key">company:</span>
            <span className="green">"Digital Point"</span>
          </Line>
          <Line>
            <span className="key">experience:</span>
            <span className="val">"Backend · RPA · Full Stack"</span>
          </Line>
          <Line>
            <span className="key">education:</span>
            <span className="val">"Análise e Desenvolvimento de Sistemas"</span>
          </Line>
 
          <Divider />
 
          <Line>
            <span className="key">stack:</span>
            <span className="blue">["Python", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "Vue", "React"]</span>
          </Line>

          <Divider />

          <Line>
            <span className="key">specialties:</span>
            <span className="amber">["REST APIs", "RPA", "Selenium", "Prisma"]</span>
          </Line>
 
          <Divider />
 
          <Line>
            <span className="key">bio:</span>
            <span className="val">
              "Transformo processos complexos em soluções eficientes, conectando sistemas, dados e automações."
              <Cursor />
            </span>
          </Line>
 
          <SocialRow>
            <SocialLink href="https://github.com/brunokemel" target="_blank" rel="noopener">
              ⌥ github
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/bruno-kemel/" target="_blank" rel="noopener">
              ↗ linkedin
            </SocialLink>
            <SocialLink href="mailto:br.kemel@gmail.com">
              ✉ email
            </SocialLink>
            <CvButton href="/assets/Bruno_Kemel_CV.pdf" download>
              ↓ currículo
            </CvButton>
          </SocialRow>
        </OutputBlock>
      </Container>
 
      <ScrollHint>
        <span>scroll</span>
        <span>↓</span>
      </ScrollHint>
    </HeaderContainer>
  )
}
 
export default Header
