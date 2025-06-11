import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { colors, breakpoints } from "../../styles/theme"


const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: ${({ isScrolled }) => 
    isScrolled ? colors.background : 'transparent'};
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? `0 2px 4px ${colors.primary}15` : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    bottom: 0;
    width: 70%;
    max-width: 300px;
    background-color: ${colors.background};
    flex-direction: column;
    padding: 5rem 2rem;
    box-shadow: -2px 0 4px ${colors.primary}15;
    transition: right 0.3s ease;
  }
`;

const NavLink = styled.a`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  color: ${colors.primary};
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
];

export const Navbar = () => {
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
        <Logo href="#inicio">Seu Nome</Logo>
        
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