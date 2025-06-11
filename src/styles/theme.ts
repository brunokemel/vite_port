
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
    liColor: '#fff',     // Verde médio → cor de lista
    primary: '#03fa6e',     // Verde neon → agora é sua cor principal
    secondary: '#1dbf73',   // Verde médio → azul secundário substituído
    background: '#171810',  // Preto esverdeado → fundo escuro
    text: '#003049',        // Branco azulado → ótimo contraste com o fundo escuro
    textLight: '#94a3b8',   // Cinza claro → para textos secundários
    accent: '#0ea5e9',      // Azul vibrante → destaque moderno
    error: '#ef4444',       // Mantido → vermelho tradicional
    success: '#22c55e',     // Mantido → verde sucesso
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