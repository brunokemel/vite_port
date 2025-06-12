import { colors, breakpoints } from "../../styles/theme"
import styled from "styled-components";


export const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background-color: ${({ isScrolled }) => 
    isScrolled ? colors.secondary : 'transparent'};
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? `0 2px 4px ${colors.accent}15` : 'none'};
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.accent};
  text-decoration: none;
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
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

export const NavLink = styled.a`
  color: ${colors.liColor};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.accent};
  }
`;

export const MenuButton = styled.button`
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

export const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;