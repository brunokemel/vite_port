import { colors, breakpoints } from "../../styles/theme"
import styled, { keyframes, css } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;


type HeaderContainerProps = {
  $isDesktop: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  background: linear-gradient(-45deg,${colors.backgroundHeader});
  background-size: 400% 400%;

  ${({ $isDesktop }) =>
    $isDesktop
      ? css`
          transition: background-position 0.2s ease;
        `
      : css`
          animation: ${gradient} 15s ease infinite;
        `
  }

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, ${colors.primary}05 0%, transparent 70%);
    top: -50%;
    left: -50%;
    z-index: 0;
  }
`;


export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: ${colors.textLight};
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const SocialLink = styled.a`
  color: ${colors.primary};
  font-size: 2.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${colors.background};
  box-shadow: 0 4px 6px ${colors.primary}15;

  &:hover {
    color: ${colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px ${colors.error}25;
  }
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px ${colors.accent}25;

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px ${colors.accent}35;
    color : ${colors.accent};
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 47%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.textLight};
  font-size: 0.9rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;