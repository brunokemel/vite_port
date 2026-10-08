# Portfólio — Bruno Kemel

Portfólio pessoal desenvolvido com React e TypeScript. A interface utiliza uma identidade visual inspirada em terminal para apresentar minhas habilidades, projetos, currículo e formas de contato.

## Tecnologias

- React 19
- TypeScript
- Vite
- Styled Components
- Material UI Icons
- ESLint

## Funcionalidades

- Apresentação profissional com links para GitHub, LinkedIn, e-mail e currículo
- Navegação por âncoras entre as seções da página
- Menu responsivo para desktop, tablet e dispositivos móveis
- Cards de habilidades separados por categoria
- Projetos com descrição, tecnologias, repositório e demonstração, quando disponível
- Contato direto por e-mail, WhatsApp e redes sociais
- Animações e transições com suporte à preferência de redução de movimento
- Navegação por teclado, indicadores de foco e atributos de acessibilidade no menu

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
git clone https://github.com/brunokemel/vite_port.git
cd vite_port
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Scripts

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run lint     # executa o ESLint
npm run preview  # visualiza localmente o build de produção
```

## Estrutura principal

```text
src/
├── components/
│   ├── Contact/       # contatos e rodapé
│   ├── Header/        # apresentação inicial
│   ├── Navbar/        # navegação principal e menu mobile
│   ├── Projects/      # listagem e dados dos projetos
│   └── Skills/        # categorias e dados das habilidades
├── styles/
│   ├── animations.ts  # animações compartilhadas
│   └── theme.ts       # cores e breakpoints
├── App.tsx            # composição das seções
├── main.tsx           # ponto de entrada da aplicação
└── vite-env.d.ts      # tipos do Vite

public/
├── assets/
│   └── Bruno_Kemel_CV.pdf
└── bkLOGO.png

createGlobalStyle.ts   # reset e estilos globais
```

## Personalização

- **Apresentação:** edite `src/components/Header/Header.tsx`.
- **Projetos:** altere o array em `src/components/Projects/Components.tsx`.
- **Habilidades:** altere os grupos em `src/components/Skills/Components.tsx`.
- **Contatos:** edite `src/components/Contact/components.tsx`.
- **Cores e breakpoints:** ajuste `src/styles/theme.ts`.
- **Currículo:** substitua `public/assets/Bruno_Kemel_CV.pdf`, mantendo o mesmo nome, ou atualize o caminho usado no Header.

## Build e deploy

Gere o build de produção com:

```bash
npm run build
```

O conteúdo será criado em `dist/` e pode ser publicado em serviços como Vercel ou Netlify usando:

- Comando de build: `npm run build`
- Diretório de saída: `dist`

## Licença

Este projeto está sob a licença ISC.
