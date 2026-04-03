import styled, { keyframes } from 'styled-components';
import { colors } from "../../styles/theme"
 
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
 
/* ── Section ── */
export const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.bgColor};
`;
 
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
 
/* ── Section label  e.g.  "02. skills" ── */
export const SectionLabel = styled.p`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 1.5rem;
`;
 
/* ── Prompt line  user@portfolio ~$ ls --skills ── */
export const PromptLine = styled.div`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
 
  .user  { color: #4ade80; }
  .host  { color: #555; }
  .cmd   { color: #e2e8f0; }
  .flag  { color: #60a5fa; }
`;
 
/* ── Grid ── */
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;
 
/* ── Card ── */
export const SkillCard = styled.div<{ $delay?: number }>`
  background: #111;
  border: 1px solid #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  transition: border-color 0.2s, background 0.2s;
 
  &:hover {
    background: #161616;
    border-color: #2a2a2a;
  }
`;
 
/* ── Category label with colored dot ── */
export const CategoryLabel = styled.div<{ $color: string }>`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 7px;
 
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    flex-shrink: 0;
  }
`;
 
/* ── Tag row ── */
export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;
 
/* ── Individual skill tag ── */
export const SkillTag = styled.span<{ $color: string }>`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => `${$color}14`};
  border: 1px solid ${({ $color }) => `${$color}30`};
  padding: 3px 10px;
  border-radius: 4px;
  transition: background 0.15s;
 
  &:hover {
    background: ${({ $color }) => `${$color}26`};
  }
`;