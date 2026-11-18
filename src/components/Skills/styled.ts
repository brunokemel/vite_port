import styled, { keyframes } from 'styled-components';
 
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
  background: transparent;
`;
 
export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 48px 24px 24px;
  border: 1px solid #0b397e;
  border-radius: 8px 8px 4px 4px;
  background: linear-gradient(135deg, #fff, #f0f6fc);
  box-shadow: 0 12px 30px #00345b55;
  &::before { content: 'Habilidades — DevKemel.exe'; position: absolute; inset: 0 0 auto; height: 34px; padding: 8px 14px; border-radius: 7px 7px 0 0; color: white; font: bold 14px Tahoma, sans-serif; text-shadow: 1px 1px #173f7b; background: linear-gradient(#5da8f3, #1556b5); border-bottom: 1px solid #083b83; }
  @media (max-width: 520px) { padding: 46px 16px 18px; }
`;
 
/* ── Section label  e.g.  "02. skills" ── */
export const SectionLabel = styled.h2`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #526d88;
  text-shadow: none;
  margin-bottom: 0.65rem;
`;
 
/* ── Prompt line  user@portfolio ~$ ls --skills ── */
export const PromptLine = styled.div`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.65rem;
  flex-wrap: wrap;
 
  .user  { color: #16813b; }
  .host  { color: #526d88; }
  .cmd   { color: #263d58; }
  .flag  { color: #1265b4; }
`;

export const SkillsIntro = styled.p`
  max-width: 720px;
  margin: 0 0 1.35rem;
  color: #43596f;
  font: 13px/1.65 Tahoma, Verdana, sans-serif;
`;
 
/* ── Grid ── */
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
 
/* ── Card ── */
export const SkillCard = styled.article<{ $delay?: number; $featured?: boolean }>`
  background: linear-gradient(#fff, #e5eef8);
  border: 1px solid #8ca8c5;
  border-radius: 4px;
  padding: 16px;
  ${({ $featured }) => $featured && `grid-column: 1 / -1;`}
  box-shadow: 1px 1px white inset, -1px -1px #c0d0df inset, 0 2px 4px #12365c22;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s;
 
  &:hover {
    background: linear-gradient(#fff, #d8e9fa);
    border-color: #3478bd;
    box-shadow: 1px 1px white inset, -1px -1px #c0d0df inset, 0 5px 12px #12365c24;
    transform: translateY(-2px);
  }
`;
 
/* ── Category label with colored dot ── */
export const CategoryLabel = styled.h3<{ $color: string }>`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin-top: 0;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 7px;
 
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: ${({ $color }) => $color};
    flex-shrink: 0;
  }
`;

export const GroupDescription = styled.p`
  margin-bottom: 12px;
  color: #64798d;
  font: 11px/1.45 Tahoma, Verdana, sans-serif;
`;
 
/* ── Tag row ── */
export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;
 
/* ── Individual skill tag ── */
export const SkillTag = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  color: #2d455d;
  background: linear-gradient(#fff, #edf4fb);
  border: 1px solid #b5c6d7;
  box-shadow: 1px 1px white inset;
  padding: 5px 9px;
  border-radius: 3px;
  transition: background 0.15s, border-color 0.15s, transform 0.15s;
  svg { flex: 0 0 auto; width: 14px; height: 14px; }
 
  &:hover {
    border-color: ${({ $color }) => $color};
    background: linear-gradient(#fff, #dceafb);
    transform: translateY(-1px);
  }
`;
