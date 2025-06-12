
export type Colors = {
  liColor: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textLight: string;
  accent: string;
  error: string;
  success: string;
};

export const colors: Colors= {
    liColor: '#ffffff',       // Branco puro → textos de lista bem visíveis
    primary: '#f0f0f0',       // Cinza quase branco → ótimo para seções ou botões claros
    secondary: '#1a1a1a',     // Cinza carvão → substitui o cinza escuro para mais contraste
    background: '#0a0a0a',    // Preto profundo → fundo principal
    text: '#ffffff',          // Branco puro → texto principal com contraste máximo
    textLight: '#c0c0c0',     // Cinza claro → agora com mais brilho, bom pra subtítulos
    accent: '#e11d48',        // Vermelho forte (tom cereja) → destaque moderno e vibrante
    error: '#991b1b',         // Vermelho escuro intenso → mais visível sem ser berrante
    success: '#22c55e',       // Verde mantido → bom contraste com fundo preto
}


export type Breakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};
export const breakpoints: Breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
};