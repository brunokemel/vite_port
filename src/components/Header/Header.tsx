import { 
    HeaderContainer,
    Content,
     Title,
    Subtitle,
    SocialLinks,
    SocialLink,
    DownloadButton,
    ScrollIndicator 
} from "./styled"


import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';





const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title>Seu Nome</Title>
        <Subtitle>
          Desenvolvedor Full Stack Júnior apaixonado por criar soluções
          inovadoras e experiências digitais excepcionais
        </Subtitle>
        
        <SocialLinks>
          <SocialLink href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="inherit" />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="inherit" />
          </SocialLink>
          <SocialLink href="mailto:seu-email@exemplo.com" aria-label="Email">
            <EmailIcon fontSize="inherit" />
          </SocialLink>
        </SocialLinks>

        <DownloadButton href="/seu-curriculo.pdf" download>
          <DescriptionIcon />
          Baixar Currículo
        </DownloadButton>
      </Content>

      <ScrollIndicator>
        <span>Role para baixo</span>
        <span>↓</span>
      </ScrollIndicator>
    </HeaderContainer>
  );
}; 

export default Header;