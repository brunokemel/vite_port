
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
  spanColor?: string;
  logoColor?: string;
};

export const colors: Colors= {
  liColor: '#ffffff',          // Branco puro
  primary: '#f5f5f7',          // Cinza muito claro
  secondary: '#2e2e2e',        // Cinza escuro forte
  background: '#121212',       // Preto quase total
  text: '#eaeaea',             // Branco off-white para texto principal
  textLight: '#a0a0a0',        // Cinza médio para subtítulos e textos menos importantes
  accent: '#00ff88',           // Vermelho cereja para destaques
  error: '#991b1b',            // Vermelho escuro intenso
  success: '#00E676',          // Verde vibrante
  backgroundHeader: 'linear-gradient(90deg, #e11d48 0%, #7e1e3b 50%, #1a1a1a 75%, #121212 100%)',
  spanColor: '#00ff88',        // Verde neon para detalhes
  logoColor: '#ffffff',        // Branco puro para o logo

    
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