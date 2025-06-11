import styled from 'styled-components';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

import { colors } from "../../styles/theme"

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px ${colors.primary}15;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px ${colors.primary}25;
  }
`;

const ContactIcon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContactInfo = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary};
  }
`;

const contactInfo = [
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

export const Contact = () => {
  return (
    <ContactSection id="contato">
      <Container>
        <Title>Entre em Contato</Title>
        <ContactGrid>
          {contactInfo.map((contact, index) => (
            <ContactCard key={index}>
              <ContactIcon>{contact.icon}</ContactIcon>
              <ContactTitle>{contact.title}</ContactTitle>
              <ContactInfo>
                <ContactLink href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.info}
                </ContactLink>
              </ContactInfo>
            </ContactCard>
          ))}
        </ContactGrid>
      </Container>
    </ContactSection>
  );
}; 