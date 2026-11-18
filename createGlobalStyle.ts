import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Tahoma, Verdana, sans-serif;
    color: #17263a;
    background: #1676a8;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    /* color: inherit; */
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  a, button {
    &:focus-visible {
      outline: 2px solid #ffcc33;
      outline-offset: 4px;
    }
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background: radial-gradient(ellipse at 72% 38%, #63c9ef 0%, #218ec4 38%, #08619a 72%, #064777 100%);
  }

  ::selection { background: #316ac5; color: white; }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
