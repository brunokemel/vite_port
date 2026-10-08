import { useState, useEffect, useId } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { 
  Nav,
  NavContainer,
  Logo,
  MenuButton,
  NavLinks,
  CloseButton,
  NavLink,
  Dots,
  Dot,
  Title,
  BrandGroup
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
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav $isScrolled={isScrolled} aria-label="Navegação principal">
      <NavContainer>
        <BrandGroup>
          <Dots aria-hidden="true">
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </Dots>
          <Logo href="#inicio" aria-label="Ir para o início">
            <span>~/bk</span>
            <Title> — portfolio</Title>
          </Logo>
        </BrandGroup>
        
        <MenuButton
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          <MenuIcon fontSize="inherit" />
        </MenuButton>

        <NavLinks id={menuId} $isOpen={isOpen}>
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
