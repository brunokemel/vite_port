import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background: #121212;
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
      outline: 2px solid #4ade80;
      outline-offset: 4px;
    }
  }

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
