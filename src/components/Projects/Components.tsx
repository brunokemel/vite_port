import disneyPlusImg from '../../assets/Disney+.png'
import serverNode from '../../assets/Server.png'
import gruntSorteador from '../../assets/sorteadorGrunt.png'

export const projects = [
  {
    id: 1,
    title: 'disneyplus Clone',
    img: disneyPlusImg,
    description: 'Clone da interface do Disney+ com React, Redux e Styled Components, incluindo navegação e responsividade.',
    tags: ['Html5', 'Css', 'JavaScript', 'Sass'],
    github: 'https://github.com/brunokemel/clone_disneyplus',
    demo: 'https://clone-disneyplus-brunok-emel.vercel.app/'
  },
  {
    id: 2,
    title: 'Chat Server',
    img: serverNode,
    description: 'Chat server desenvolvido com Node.js, Express e TypeScript, utilizando WebSockets para comunicação em tempo real. (Ainda em desenvolvimento)',
    tags: ['React', 'Node.js', 'TypScript', 'Express'],
    github: 'https://github.com/brunokemel/server',
    demo: 'https://chat-teste-kemel.vercel.app/',
  },
  {
    id: 3,
    title: 'Sorteador de Números',
    img: gruntSorteador,
    description: 'Sorteador de números desenvolvido com HTML, LESS e Grunt, permitindo a seleção aleatória de números dentro de um intervalo definido pelo usuário.',
    tags: ['HTML', 'LESS', 'GRUNT'],
    github: 'https://github.com/brunokemel/sorteador_grunt',
    demo: 'https://sorteadorgruntbruno-two.vercel.app/'
  }
];