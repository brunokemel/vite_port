import {
  // Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import React from 'react';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  info: string;
  link: string;

}

export const contactInfo: ContactInfo[] = [
  // {
  //   icon: <EmailIcon />,
  //   title: 'Email',
  //   info: 'br.kemel@gmail.com',
  //   link: 'mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre...'
  // },
  {
    icon: <LinkedInIcon />,
    title: 'LinkedIn',
    info: 'Acesse meu perfil',
    link: 'https://www.linkedin.com/in/bruno-kemel/'
  }
  ,
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    info: '@kemel_develop',
    link: 'https://www.instagram.com/kemel_develop/'
  }
]; 