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
 
        {/* Decorative window dots */}
        {/* <WindowBar>
          <Dot $color="#f87171" />
          <Dot $color="#f59e0b" />
          <Dot $color="#4ade80" />
        </WindowBar>
  */}
        {/* Avatar */}
        <Avatar
          src="https://github.com/brunokemel.png"
          alt="Bruno Kemel"
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/64/1e1e1e/4ade80?text=BK' }}
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
            <span className="val">"Backend Dev"</span>
          </Line>
          <Line>
            <span className="key">location:</span>
            <span className="val">"Brasil 🇧🇷"</span>
          </Line>
          <Line>
            <span className="key">focus:</span>
            <span className="amber">"APIs · Microsserviços · DB"</span>
          </Line>
          <Line>
            <span className="key">status:</span>
            <span className="green">"Disponível"</span>
          </Line>
 
          <Divider />
 
          <Line>
            <span className="key">stack:</span>
            <span className="blue">["TypeScript", "Python", "Node.js"]</span>
          </Line>
          <Line>
            <span className="key">education:</span>
            <span className="val">"Análise e Desenvolvimento de Sistemas"</span>
          </Line>
 
          <Divider />
 
          <Line>
            <span className="key">bio:</span>
            <span className="val">
              "Apaixonado por construir soluções que escalam."
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