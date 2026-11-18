import { colors, breakpoints } from "../../styles/theme"
import styled from "styled-components";


export const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.7rem 2rem;
  background: linear-gradient(180deg, #3d91e8 0%, #1763bd 45%, #0c4fa4 100%);
  border-bottom: 2px solid #083b83;
  box-shadow: 0 2px 8px #00274a66;
  transition: filter 0.2s ease;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.75rem 1rem;
  }
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

export const  Dots = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const Dot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: block;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-family: Tahoma, Verdana, sans-serif;
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px #16437a;

  white-space: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;
export const Title = styled.span`
  font-family: Tahoma, Verdana, sans-serif;
  text-decoration: none;
  color: #dcecff;`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    bottom: 0;
    width: 50%;
    max-width: 300px;
    background: linear-gradient(180deg, #f9fbff, #c7d9ed);
    flex-direction: column;
    padding: 5rem 2rem;
    transition: right 0.3s ease, visibility 0.3s ease;
    box-shadow: -12px 0 30px rgba(0, 0, 0, 0.35);

    @media (max-width: 480px) {
      width: min(85%, 300px);
    }
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 0.9rem;
  padding: 7px 12px;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover {
    color: white;
    background: linear-gradient(#6db5f2, #1a5eae);
    border-color: #9cc8f3 #0b4387 #0b4387 #9cc8f3;
  }

  @media (max-width: ${breakpoints.tablet}) {
    color: #174674;
    &:hover { color: #0b4f99; background: #dcecff; }
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
