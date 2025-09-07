import disneyPlusImg from '../../assets/Disney+.png'
// import serverNode from '../../assets/Server.png'
import gruntSorteador from '../../assets/sorteadorGrunt.png'
import python from '../../assets/Python.jpg'
import calcpython from '../../assets/calcPYTHON.png'
import chatPython from '../../assets/ChatPython.jpg'
import cliTemp from '../../assets/CLItemp.png'
import api from '../../assets/api.png'

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
    title: 'API ',
    img: api,
    description: 'API de usuarios com python desenvolvida com FastAPI, SQLAlchemy e SQLite, permitindo operações CRUD (Create, Read, Update, Delete) em um banco de dados de usuários.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    github: 'https://github.com/brunokemel/api_py',
    demo: '',
  },
  {
    id: 3,
    title: 'Sorteador de Números',
    img: gruntSorteador,
    description: 'Sorteador de números desenvolvido com HTML, LESS e Grunt, permitindo a seleção aleatória de números dentro de um intervalo definido pelo usuário.',
    tags: ['HTML', 'LESS', 'GRUNT'],
    github: 'https://github.com/brunokemel/sorteador_grunt',
    demo: 'https://sorteadorgruntbruno-two.vercel.app/'
  },
  {
    id:4,
    img: cliTemp,
    description: 'Aplicação de linha de comando que busca a temperatura atual de uma cidade usando a API OpenWeatherMap',
    tags: ['Python', 'API ', 'OPEN-METEO'],
    github: 'https://github.com/brunokemel/previs-o_temp'
  },
  {
    id: 5,
    img: python,
    description: 'Organizador de pastas desenvolvido com Python, utilizando o módulo os para manipulação de arquivos e diretórios. Permite organizar arquivos em pastas específicas com base em suas extensões.',
    tags: ['Python'],
    github: 'https://github.com/brunokemel/organizador_pastas'
  },
  {
    id: 6,
    img: chatPython,
    description: 'Chat em tempo real desenvolvido com Python, utilizando sockets para comunicação entre cliente e servidor. Permite a troca de mensagens em tempo real entre múltiplos usuários.(Em desenvolvimento)',
    tags: ['Python'],
    github: 'https://github.com/brunokemel/chat_realtime'
  },
  
  {
    id: 7,
    img: calcpython,
    description: 'Calculadora simples desenvolvida com Python, utilizando o kinvy para a interface gráfica. Permite operações básicas como adição, subtração, multiplicação e divisão.',
    tags: ['Python'],
    github: 'https://github.com/brunokemel/kivyCALC_py/tree/main',
  }
];