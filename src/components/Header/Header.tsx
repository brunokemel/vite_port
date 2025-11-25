import React, { useEffect, useState } from 'react';
import {
  HeaderContainer,
  Content,
  ProfileSection,
  ProfileImage,
  TextSection,
  Title,
  Subtitle,
  ActionsSection,
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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Ativa as animações quando o componente é montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
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
        <ProfileSection $isVisible={isVisible}>
          <ProfileImage
            src="https://github.com/brunokemel.png"
            alt="Bruno Kemel - Foto do GitHub"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/150/6366f1/ffffff?text=BK';
            }}
          />
        </ProfileSection>

        <TextSection $isVisible={isVisible}>
          <Title>Bruno Kemel</Title>
          <Subtitle>
            Desenvolvedor back-end apaixonado por tecnologia e sempre buscando evoluir como profissional.
            Atuo no desenvolvimento de interfaces modernas e APIs funcionais.
          </Subtitle>
        </TextSection>

        <ActionsSection $isVisible={isVisible}>
          <SocialLinks>
            <SocialLink
              href="https://github.com/brunokemel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              $delay="0s"
            >
              <GitHubIcon fontSize="inherit" />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/bruno-kemel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              $delay="0.2s"
            >
              <LinkedInIcon fontSize="inherit" />
            </SocialLink>

            <SocialLink
              href="mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre..."
              aria-label="Email"
              $delay="0.3s"
            >
              <EmailIcon fontSize="inherit" />
            </SocialLink>
          </SocialLinks>

          <DownloadButton
            href="/assets/curriculo .pdf"
            download
          >
            <DescriptionIcon />
            Baixar Currículo
          </DownloadButton>
        </ActionsSection>
      </Content>

      <ScrollIndicator>
        <span>Role para baixo</span>
        <span>↓</span>
      </ScrollIndicator>
    </HeaderContainer>
  );
};

export default Header;