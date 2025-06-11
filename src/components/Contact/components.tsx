import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
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
    info: 'seu-email@exemplo.com',
    link: 'mailto:seu-email@exemplo.com'
  },
  {
    icon: <PhoneIcon />,
    title: 'Telefone',
    info: '(00) 00000-0000',
    link: 'tel:+5500000000000'
  },
  {
    icon: <LocationIcon />,
    title: 'Localização',
    info: 'Sua Cidade, Estado',
    link: 'https://maps.google.com'
  }
]; 