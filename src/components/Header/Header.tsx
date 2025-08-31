import React, { useEffect, useState } from 'react';
import {
  HeaderContainer,
  Content,
  Title,
  Subtitle,
  SocialLinks,
  SocialLink,
  DownloadButton,
  ScrollIndicator
} from './styled';

// //impor emailScripts
// import {handleSendEmail, createMailtoLink } from './email'

import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';

const Header: React.FC = () => {
  const [bgPosition, setBgPosition] = useState<string>('0% 50%');
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;

    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setBgPosition(`${x}% ${y}%`);
  };

  return (
    <HeaderContainer
      $isDesktop={isDesktop}
      style={isDesktop ? { backgroundPosition: bgPosition } : {}}
      onMouseMove={handleMouseMove}
    >
      <Content>
        <Title>Bruno Kemel</Title>
        <Subtitle>
          Desenvolvedor back-end com foco em código limpo e bem escrito, visando melhor otimização do projetoto
        </Subtitle>

        <SocialLinks>
          <SocialLink
            href="https://github.com/brunokemel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="inherit" />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/bruno-kemel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="inherit" />
          </SocialLink>

          <SocialLink
            href="mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre..."
            aria-label="Email"
          >
            <EmailIcon fontSize="inherit" />
          </SocialLink>

        </SocialLinks>

        <DownloadButton
          href="https://drive.google.com/drive/folders/1D6Mvrr6CJCBeudPF8u8zEO1EqRbGtgiI?usp=sharing"
          download
        >
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