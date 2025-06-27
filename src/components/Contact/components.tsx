import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import React from 'react';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  info: string;
  link: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    info: 'br.kemel@gmail.com',
    link: 'mailto:br.kemel@gmail.com'
  },
  {
    icon: <LinkedInIcon />,
    title: 'Bruno Kemel',
    info: 'Acesse meu perfil',
    link: 'https://www.linkedin.com/in/bruno-kemel/'
  }
]; 