import { contactInfo } from './components'; // Import the contact info array

import {
  ContactSection,
  Container,
  Title,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactTitle,
  ContactInfo,
  ContactLink
 } from './styled'


const Contact = () => {
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

export default Contact;