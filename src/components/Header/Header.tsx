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
        <Title>Bruno Kemel</Title>
        <Subtitle>
          Desenvolvedor Full Stack Júnior apaixonado por criar soluções
          inovadoras e experiências digitais excepcionais
        </Subtitle>
        
        <SocialLinks>
          <SocialLink href="https://github.com/brunokemel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="inherit" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/bruno-kemel-026a22220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="inherit" />
          </SocialLink>
          <SocialLink href="mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre..." aria-label="Email">
            <EmailIcon fontSize="inherit" />
          </SocialLink>
        </SocialLinks>

        <DownloadButton href="https://docs.google.com/document/d/15X7q_YIwDpgCD8yF-tso1dBcMY6rFlU2/edit?usp=sharing&ouid=106886270743184329214&rtpof=true&sd=true" download>
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