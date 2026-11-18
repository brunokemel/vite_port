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
  padding: 7rem 2rem 5rem;
  background: transparent;
  position: relative;
  overflow: hidden;
`
 
export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 28px 28px;
  position: relative;
  background: linear-gradient(135deg, #fff 0%, #f4f8fc 100%);
  border: 1px solid #0b397e;
  border-radius: 9px 9px 4px 4px;
  box-shadow: 2px 3px 0 #ffffffaa inset, 0 16px 38px #00345b66;

  &::before {
    content: 'DevKemel.exe';
    position: absolute;
    left: 0; right: 0; top: 0;
    height: 34px;
    padding: 8px 14px;
    border-radius: 8px 8px 0 0;
    color: white;
    font: bold 14px Tahoma, sans-serif;
    text-shadow: 1px 1px #173f7b;
    background: linear-gradient(180deg, #5da8f3 0%, #2777d1 35%, #1556b5 100%);
    border-bottom: 1px solid #083b83;
  }

  @media (max-width: 520px) { padding: 46px 18px 22px; }
`

 
/* ── Prompt line ── */
export const PromptLine = styled.div`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 13px;
  color: #586a7d;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #cad7e4;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 100ms;
  flex-wrap: wrap;

  .user { color: #16813b; }
  .cmd  { color: #263d58; }
  .flag { color: #1265b4; }
`
 
/* ── Output block ── */
export const OutputBlock = styled.div`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 13px;
  color: #4b5c6e;
  line-height: 1.8;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 200ms;
  padding-top: 1rem;
`
 
export const Line = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 2px;
  overflow-wrap: anywhere;
 
  .key   { color: #617488; min-width: 100px; flex-shrink: 0; }
  .val   { color: #20354a; }
  .green { color: #147b36; }
  .amber { color: #a35b00; }
  .blue  { color: #145fa8; }

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 10px;

    .key { min-width: 0; }
  }
`
 
export const Divider = styled.div`
  height: 1px;
  background: #d5e0eb;
  margin: 1.25rem 0;
`

/* ── Avatar ── */
export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #8eaac6;
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
  border-top: 1px solid #cad7e4;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 350ms;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    gap: 12px;
  }
`
 
export const SocialLink = styled.a`
  font-family: Tahoma, Verdana, sans-serif;
  font-size: 11px;
  color: #315b84;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.15s;
 
  &:hover { color: #074f9e; text-decoration: underline; }
`
 
export const CvPreviewWrapper = styled.div`
  position: relative;
  margin-left: auto;

  &:hover iframe,
  &:focus-within iframe {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 520px) {
    margin-left: 0;
  }
`

export const CvPreview = styled.iframe`
  position: absolute;
  right: 0;
  bottom: calc(100% + 10px);
  width: 360px;
  height: 480px;
  border: 1px solid #7c9ab8;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.15s, visibility 0.15s, transform 0.15s;
  pointer-events: none;
  z-index: 10;

  @media (max-width: 520px), (hover: none) {
    display: none;
  }
`

export const CvButton = styled.a`
  font-family: 'DM Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: #173b68;
  background: linear-gradient(#fff, #dce8f4);
  border: 1px solid #7896b4;
  box-shadow: 1px 1px white inset, -1px -1px #a1b4c8 inset;
  padding: 3px 10px;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s;
 
  &:hover { background: linear-gradient(#fff, #c5dcf3); }

`
 
/* ── Cursor blink ── */
export const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 14px;
  background: #2b71c9;
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
  color: #e7f4ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  opacity: 0;
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: 600ms;
`
