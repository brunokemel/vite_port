# Portfólio Pessoal - Bruno Kemel

Este é um portfólio pessoal moderno e responsivo construído com React, TypeScript, Vite e Styled Components. O projeto apresenta uma interface elegante com animações interativas e design responsivo.

## 🚀 Tecnologias

### Frontend
- **React 19.1.0** - Biblioteca principal
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 6.3.5** - Build tool e dev server
- **Styled Components 6.1.18** - CSS-in-JS
- **Material UI 7.1.1** - Componentes e ícones
- **React Icons 5.5.0** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **TypeScript ESLint** - Linting específico para TypeScript
- **Emotion** - CSS-in-JS engine

## 📦 Instalação

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

## 🎨 Personalização

### Informações Pessoais
Para personalizar o portfólio com suas informações:

1. **Header Principal** (`src/components/Header/Header.tsx`):
   - Nome completo
   - Título profissional
   - Links das redes sociais (GitHub, LinkedIn, Email)
   - Link do currículo

2. **Projetos** (`src/components/Projects/Components.tsx`):
   - Adicione seus projetos no array `projects`
   - Inclua título, descrição, tecnologias, imagens e links

3. **Habilidades** (`src/components/Skills/Components.tsx`):
   - Personalize as categorias de habilidades
   - Adicione suas competências técnicas

4. **Tema e Cores** (`src/styles/theme.ts`):
   - Modifique as cores do tema
   - Ajuste breakpoints para responsividade

### Configuração do EmailJS
Para configurar o formulário de contato:
1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure o serviço de email
3. Atualize as credenciais no componente de contato

## ✨ Funcionalidades

- **Header Interativo** - Seção inicial com efeito parallax no mouse e links sociais
- **Navegação Responsiva** - Menu de navegação adaptável para diferentes dispositivos
- **Seção de Habilidades** - Exibição organizada das competências técnicas
- **Portfólio de Projetos** - Galeria de projetos com imagens, descrições e links
- **Formulário de Contato** - Sistema de contato integrado com EmailJS
- **Design Responsivo** - Interface adaptável para desktop, tablet e mobile
- **Animações Suaves** - Transições e efeitos visuais modernos

## 📝 Estrutura do Projeto

```
src/
├── components/           # Componentes organizados por seção
│   ├── Contact/         # Formulário de contato
│   │   ├── Contact.tsx
│   │   ├── components.tsx
│   │   ├── styled.ts
│   │   └── GMAIL/
│   ├── Footer/          # Rodapé do site
│   ├── Header/          # Cabeçalho principal
│   ├── Navbar/          # Barra de navegação
│   ├── Projects/        # Seção de projetos
│   │   ├── Projects.tsx
│   │   ├── Components.tsx
│   │   └── styled.ts
│   └── Skills/          # Seção de habilidades
│       ├── Skills.tsx
│       ├── Components.tsx
│       └── styled.ts
├── assets/              # Imagens e recursos
├── styles/
│   └── theme.ts         # Configurações de tema e cores
├── App.tsx              # Componente principal
├── main.tsx            # Ponto de entrada
└── createGlobalStyle.ts # Estilos globais
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter ESLint

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Deploy em Plataformas

**Vercel (Recomendado)**
1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

**Netlify**
1. Conecte seu repositório GitHub à Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

**GitHub Pages**
1. Execute `npm run build`
2. Configure o GitHub Actions para deploy automático
3. Publique a pasta `dist` na branch `gh-pages`

## 📱 Visualização

O portfólio está otimizado para:
- **Desktop** - Experiência completa com efeitos interativos
- **Tablet** - Layout adaptado para telas médias
- **Mobile** - Interface responsiva e touch-friendly

## 📄 Licença

Este projeto está sob a licença ISC.
