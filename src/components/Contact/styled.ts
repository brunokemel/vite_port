import styled, { keyframes } from 'styled-components'
 
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`
 
/* ── Section ── */
export const ContactSection = styled.section`
  padding: 6rem 2rem 4rem;
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
  color: #555;
 
  .user { color: #4ade80; }
  .cmd  { color: #e2e8f0; }
  .flag { color: #60a5fa; }
`
 
/* ── Headline ── */
export const Headline = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #e2e8f0;
  line-height: 1.15;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 100ms;
 
  .green { color: #4ade80; }
`
 
/* ── Sub text ── */
export const Sub = styled.p`
  font-size: 13px;
  color: #666;
  max-width: 460px;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 180ms;
`
 
/* ── CTA button ── */
export const CtaButton = styled.a`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 260ms;
 
  &:hover {
    background: rgba(74, 222, 128, 0.16);
  }
`
 
/* ── Links list ── */
export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2rem;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 340ms;
`
 
export const LinkRow = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  text-decoration: none;
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 12px;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #1e1e1e;
  max-width: 420px;
  transition: all 0.15s;
 
  .icon  { color: #444; width: 18px; flex-shrink: 0; }
  .label { color: #555; min-width: 70px; }
  .value { color: #e2e8f0; flex: 1; }
  .arrow { color: #333; font-size: 11px; transition: all 0.15s; margin-left: auto; }
 
  &:hover {
    border-color: rgba(74, 222, 128, 0.25);
    background: rgba(74, 222, 128, 0.03);
 
    .arrow { color: #4ade80; transform: translateX(3px); }
    .value { color: #4ade80; }
  }
`
 
/* ── Footer ── */
export const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`
 
export const FooterText = styled.p`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #333;
 
  .green { color: #4ade80; }
`