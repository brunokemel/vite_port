import styled, { keyframes } from 'styled-components'
 
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`
 
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`
 
/* ── Page ── */
export const HeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
`
 
export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

 
/* ── Prompt line ── */
export const PromptLine = styled.div`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 13px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 100ms;
 
  .user { color: #4ade80; }
  .cmd  { color: #e2e8f0; }
  .flag { color: #60a5fa; }
`
 
/* ── Output block ── */
export const OutputBlock = styled.div`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 13px;
  color: #666;
  line-height: 2;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 200ms;
`
 
export const Line = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 2px;
 
  .key   { color: #444; min-width: 100px; flex-shrink: 0; }
  .val   { color: #e2e8f0; }
  .green { color: #4ade80; }
  .amber { color: #f59e0b; }
  .blue  { color: #60a5fa; }
`
 
export const Divider = styled.div`
  height: 1px;
  background: #1e1e1e;
  margin: 1.25rem 0;
`
 
/* ── Avatar ── */
export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #1e1e1e;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 50ms;
`
 
/* ── Social links ── */
export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #1e1e1e;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 350ms;
`
 
export const SocialLink = styled.a`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #444;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.15s;
 
  &:hover { color: #4ade80; }
`
 
export const CvButton = styled.a`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  padding: 3px 10px;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  transition: background 0.15s;
 
  &:hover { background: rgba(74, 222, 128, 0.16); }
`
 
/* ── Cursor blink ── */
export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: #4ade80;
  margin-left: 4px;
  vertical-align: middle;
  animation: ${blink} 1.1s step-start infinite;
`
 
/* ── Scroll hint ── */
export const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 600ms;
`