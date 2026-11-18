import styled, { keyframes } from 'styled-components'
 
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`
 
/* ── Section ── */
export const ContactSection = styled.section`
  padding: 6rem 2rem 4rem;
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
  &::before { content: 'MSN Messenger — Contato'; position: absolute; inset: 0 0 auto; height: 34px; padding: 8px 14px; border-radius: 7px 7px 0 0; color: white; font: bold 14px Tahoma, sans-serif; text-shadow: 1px 1px #173f7b; background: linear-gradient(#5da8f3, #1556b5); border-bottom: 1px solid #083b83; }
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
  color: #506982;
  flex-wrap: wrap;
 
  .user { color: #16813b; }
  .cmd  { color: #263d58; }
  .flag { color: #1265b4; }
`
 
/* ── Headline ── */
export const Headline = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #183755;
  line-height: 1.15;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 100ms;
 
  .green { color: #147b36; }
`
 
/* ── Sub text ── */
export const Sub = styled.p`
  font-size: 13px;
  color: #455c72;
  max-width: 460px;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 180ms;
`
 
/* ── CTA button ── */
export const CtaButton = styled.a`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #173b68;
  background: linear-gradient(#fff, #dce8f4);
  border: 1px solid #7896b4;
  box-shadow: 1px 1px white inset, -1px -1px #a1b4c8 inset;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
  opacity: 0;
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: 260ms;
 
  &:hover {
    background: linear-gradient(#fff, #c5dcf3);
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
  color: #315b84;
  text-decoration: none;
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 12px;
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #91abc4;
  background: linear-gradient(#fff, #edf4fb);
  max-width: 420px;
  transition: all 0.15s;
  min-width: 0;
 
  .icon  { color: #444; width: 18px; flex-shrink: 0; }
  .label { color: #555; min-width: 70px; }
  .value { color: #183755; flex: 1; min-width: 0; overflow-wrap: anywhere; }
  .arrow { color: #333; font-size: 11px; transition: all 0.15s; margin-left: auto; }
 
  &:hover {
    border-color: #3478bd;
    background: linear-gradient(#fff, #d8e9fa);
 
    .arrow { color: #145fa8; transform: translateX(3px); }
    .value { color: #145fa8; }
  }

  @media (max-width: 420px) {
    align-items: flex-start;
    flex-wrap: wrap;

    .label { min-width: 0; }
    .value { flex-basis: calc(100% - 42px); }
  }
`
 
/* ── Footer ── */
export const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #c5d3e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`
 
export const FooterText = styled.p`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  color: #536c85;
 
  .green { color: #4ade80; }
`
