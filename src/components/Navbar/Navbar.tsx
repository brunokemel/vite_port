import { useState, useEffect } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { 
  Nav,
  NavContainer,
  Logo,
  MenuButton,
  NavLinks,
  CloseButton,
  NavLink
} from './styled'



const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
];

  const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo href="https://github.com/brunokemel">
          BK<span>devolper</span>
          </Logo>
        
        <MenuButton onClick={toggleMenu} aria-label="Abrir menu">
          <MenuIcon fontSize="inherit" />
        </MenuButton>

        <NavLinks isOpen={isOpen}>
          <CloseButton onClick={toggleMenu} aria-label="Fechar menu">
            <CloseIcon fontSize="inherit" />
          </CloseButton>
          
          {navLinks.map((link) => (
            <NavLink 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}; 

export default Navbar;