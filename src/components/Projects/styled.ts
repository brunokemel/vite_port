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
  background-color: #0d0d0d;
`
 
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
 
/* ── Section label ── */
export const SectionLabel = styled.p`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 1.5rem;
`
 
/* ── Prompt line ── */
export const PromptLine = styled.div`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
 
  .user { color: #4ade80; }
  .host { color: #555; }
  .cmd  { color: #e2e8f0; }
  .flag { color: #60a5fa; }
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
  background: #111;
  border: 1px solid ${({ $highlight }) => $highlight ? 'rgba(74,222,128,0.2)' : '#1e1e1e'};
  background: ${({ $highlight }) => $highlight ? 'rgba(74,222,128,0.03)' : '#111'};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  transition: border-color 0.2s, background 0.2s;
 
  ${({ $highlight }) => $highlight && `
    grid-column: span 2;
    @media (max-width: 640px) { grid-column: span 1; }
  `}
 
  &:hover {
    background: #161616;
    border-color: ${({ $highlight }) => $highlight ? 'rgba(74,222,128,0.4)' : '#2a2a2a'};
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
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #444;
`
 
export const ProjectName = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 2px 0 0;
  letter-spacing: -0.2px;
`
 
export const HighlightBadge = styled.span`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 10px;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80;
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
`
 
/* ── Description ── */
export const ProjectDesc = styled.p`
  font-size: 12px;
  color: #666;
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
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.08);
  border: 1px solid rgba(96, 165, 250, 0.2);
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
  font-family: 'DM Mono', 'Fira Code', monospace;
  color: #444;
  font-size: 11px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.15s;
 
  &:hover {
    color: #4ade80;
  }
`