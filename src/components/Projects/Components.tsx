import disneyPlusImg from '../../assets/Disney+.png'
import python from '../../assets/Python.jpg'
import calcpython from '../../assets/calcPYTHON.png'
import cliTemp from '../../assets/CLItemp.png'
import api from '../../assets/api.png'
import ecommerce from '../../assets/Ecommerce.png'

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
    description: 'API de usuários em Python com FastAPI, MySQL e SQLAlchemy, com CRUD completo, autenticação JWT e validação de dados.',
    tags: ['Python', 'SQL Databases', 'JWT', 'Bcrypt', 'Pydantic', 'REST API'],
    github: 'https://github.com/brunokemel/api_crud',
    demo: '',
  },
  {
    id: 3,
    title: 'E-commerce backend',
    img: ecommerce,
    description: 'Backend para e-commerce desenvolvido com TypeScript e Supabase, incluindo autenticação, gerenciamento de produtos e processamento de pedidos.',
    tags: ['TypeScript', 'Supabase', 'PLpgSQL', 'Express', 'Dontenv', 'Docker'],
    github: 'https://github.com/brunokemel/e-commerce-backend',
    demo: ''
  },
  {
    id:4,
    title: 'Previsão do Tempo CLI',
    img: cliTemp,
    description: 'Aplicação de linha de comando que busca a temperatura atual de uma cidade usando a API OpenWeatherMap',
    tags: ['Python', 'API ', 'OPEN-METEO'],
    github: 'https://github.com/brunokemel/previs-o_temp'
  },
  {
    id: 5,
    title: 'Organizador de Pastas',
    img: python,
    description: 'Organizador de pastas desenvolvido com Python, utilizando o módulo os para manipulação de arquivos e diretórios. Permite organizar arquivos em pastas específicas com base em suas extensões.',
    tags: ['Python'],
    github: 'https://github.com/brunokemel/organizador_pastas'
  },
  {
    id: 6,
    title: 'Calculadora python',
    img: calcpython,
    description: 'Calculadora simples desenvolvida com Python, utilizando o kinvy para a interface gráfica. Permite operações básicas como adição, subtração, multiplicação e divisão.',
    tags: ['Python'],
    github: 'https://github.com/brunokemel/kivyCALC_py/tree/main',
  }
];