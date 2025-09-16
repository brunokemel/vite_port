import { contactInfo } from './components'; // Import the contact info array
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollAnimationTitle } from '../../hooks/useScrollAnimationTitle';

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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimationTitle();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <ContactSection id="contato">
      <Container>
        <Title ref={titleRef} $isVisible={titleVisible}>Entre em Contato</Title>
        <ContactGrid ref={gridRef} $isVisible={gridVisible}>
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} $delay={index * 0.1}>
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