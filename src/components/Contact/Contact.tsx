import {
  ContactSection,
  Container,
  SectionLabel,
  PromptLine,
  Headline,
  Sub,
  CtaButton,
  LinksList,
  LinkRow,
  Footer,
  FooterText,
} from './styled'
 
import { contactLinks } from './components'
 
const Contact = () => {
  return (
    <ContactSection id="contato">
      <Container>
        <SectionLabel>04. contact</SectionLabel>
 
        <PromptLine>
          <span className="user">brunokemel</span>
          <span>@portfolio ~$</span>
          <span className="cmd">./send-message</span>
          <span className="flag">--open</span>
        </PromptLine>
 
        <Headline>
          Vamos construir<br />
          <span className="green">algo juntos?</span>
        </Headline>
 
        <Sub>
          Estou disponível para projetos freelance, oportunidades fulltime
          e conversas sobre tecnologia. Respondo todos os contatos!
        </Sub>
 
        <CtaButton href="mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre...">
          <span style={{ color: '#555' }}>$</span> enviar mensagem
        </CtaButton>
 
        <LinksList>
          {contactLinks.map(link => (
            <LinkRow key={link.label} href={link.href} target="_blank" rel="noopener">
              <span className="icon">{link.icon}</span>
              <span className="label">{link.label}</span>
              <span className="value">{link.value}</span>
              <span className="arrow">→</span>
            </LinkRow>
          ))}
        </LinksList>
 
        <Footer>
          <FooterText>
            Feito com <span className="green">♥</span> por Bruno Kemel · {new Date().getFullYear()}
          </FooterText>
          <FooterText>
            <span className="green">~/portfolio</span> · React · TypeScript · Styled Components
          </FooterText>
        </Footer>
      </Container>
    </ContactSection>
  )
}
 
export default Contact