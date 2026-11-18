import styled, { keyframes } from 'styled-components'
 
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
 
/* ── Section ── */
export const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
`
 
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 48px 24px 24px;
  border: 1px solid #0b397e;
  border-radius: 8px 8px 4px 4px;
  background: linear-gradient(135deg, #fff, #f0f6fc);
  box-shadow: 0 12px 30px #00345b55;
  &::before { content: 'Projetos — DevKemel.exe'; position: absolute; inset: 0 0 auto; height: 34px; padding: 8px 14px; border-radius: 7px 7px 0 0; color: white; font: bold 14px Tahoma, sans-serif; text-shadow: 1px 1px #173f7b; background: linear-gradient(#5da8f3, #1556b5); border-bottom: 1px solid #083b83; }
  @media (max-width: 520px) { padding: 46px 16px 18px; }
`
 
/* ── Section label ── */
export const SectionLabel = styled.p`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #526d88;
  text-shadow: none;
  margin-bottom: 1.5rem;
`
 
/* ── Prompt line ── */
export const PromptLine = styled.div`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
 
  .user { color: #16813b; }
  .host { color: #526d88; }
  .cmd  { color: #263d58; }
  .flag { color: #1265b4; }
`
 
/* ── Grid: 2 cols, destaque ocupa full width ── */
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
 
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
 
/* ── Card ── */
export const ProjectCard = styled.div<{ $highlight?: boolean; $delay?: number }>`
  border: 1px solid ${({ $highlight }) => $highlight ? '#4384bf' : '#8ca8c5'};
  background: linear-gradient(#fff, #e5eef8);
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 1px 1px white inset, -1px -1px #c0d0df inset, 0 2px 4px #12365c22;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  transition: border-color 0.2s, background 0.2s;
 
  ${({ $highlight }) => $highlight && `
    grid-column: span 2;
    @media (max-width: 640px) { grid-column: span 1; }
  `}
 
  &:hover {
    background: linear-gradient(#fff, #d8e9fa);
    border-color: #3478bd;
  }
`
 
/* ── Header: num + nome + badge ── */
export const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`
 
export const ProjectNum = styled.span`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  color: #647b91;
`
 
export const ProjectName = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #183755;
  margin: 2px 0 0;
  letter-spacing: -0.2px;
`
 
export const HighlightBadge = styled.span`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 10px;
  background: #e4eff9;
  border: 1px solid #a2b8ce;
  color: #285e91;
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
`
 
/* ── Description ── */
export const ProjectDesc = styled.p`
  font-size: 12px;
  color: #455c72;
  line-height: 1.7;
  flex: 1;
`
 
/* ── Tags ── */
export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`
 
export const Tag = styled.span`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  color: #164f88;
  background: #e3effa;
  border: 1px solid #a6bfd8;
  padding: 3px 9px;
  border-radius: 4px;
  transition: background 0.15s;
 
  &:hover {
    background: rgba(96, 165, 250, 0.15);
  }
`
 
/* ── Links ── */
export const Links = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #1e1e1e;
`
 
export const IconLink = styled.a`
  font-family: Tahoma, Verdana, sans-serif;
  color: #245f99;
  font-size: 11px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.15s;
 
  &:hover { color: #074f9e; text-decoration: underline; }
`
