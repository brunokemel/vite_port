
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
  backgroundHeader: string;
};

export const colors: Colors= {
    liColor: '#ffffff',          // Branco puro para listas, fácil leitura
  primary: '#f5f5f7',          // Cinza muito claro, suave para botões/seções claras
  secondary: '#2e2e2e',        // Cinza escuro forte, bom para textos secundários
  background: '#121212',       // Preto quase total, mas menos agressivo que #0a0a0a
  text: '#eaeaea',             // Branco off-white para texto principal, menos cansativo
  textLight: '#a0a0a0',        // Cinza médio para subtítulos e textos menos importantes
  accent: '#e11d48',           // Vermelho cereja para destaques
  error: '#991b1b',            // Vermelho escuro intenso, claro e visível
  success: '#22c55e',          // Verde vibrante para status positivo
  backgroundHeader: 'linear-gradient(90deg, #e11d48 0%, #7e1e3b 50%, #1a1a1a 75%, #121212 100%)'
    
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