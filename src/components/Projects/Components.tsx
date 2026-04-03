export interface Project {
  num: string
  name: string
  description: string
  stack: string[]
  github?: string
  demo?: string
  highlight?: boolean
}
 
export const projects: Project[] = [
  {
    num: '01',
    name: 'Gerador de Planos de Aula',
    description:
      'Aplicação backend em TypeScript que gera planos de aula usando a API Generative AI (Gemini) e persiste os planos no Supabase.',
    stack: ['Node.js', 'TypeScript', 'Supabase', 'React', 'Generative AI'],
    github: 'https://github.com/brunokemel/Gerador-de-Planos',
    highlight: true,
  },
  {
    num: '02',
    name: 'API CRUD',
    description:
      'API de usuários em Python com FastAPI, MySQL e SQLAlchemy, com CRUD completo, autenticação JWT e validação de dados.',
    stack: ['Python', 'FastAPI', 'MySQL', 'JWT', 'Pydantic'],
    github: 'https://github.com/brunokemel/api_crud',
  },
  {
    num: '03',
    name: 'E-commerce Backend',
    description:
      'Backend para e-commerce com TypeScript e Supabase, incluindo autenticação, gerenciamento de produtos e processamento de pedidos.',
    stack: ['TypeScript', 'Supabase', 'Express', 'Docker', 'PLpgSQL'],
    github: 'https://github.com/brunokemel/e-commerce-backend',
  },
  {
    num: '04',
    name: 'Previsão do Tempo CLI',
    description:
      'Aplicação de linha de comando que busca a temperatura atual de uma cidade usando a API OpenWeatherMap.',
    stack: ['Python', 'Open-Meteo', 'CLI'],
    github: 'https://github.com/brunokemel/previs-o_temp',
  },
  {
    num: '05',
    name: 'Organizador de Pastas',
    description:
      'Organizador de arquivos em Python que classifica automaticamente arquivos em pastas com base em suas extensões.',
    stack: ['Python'],
    github: 'https://github.com/brunokemel/organizador_pastas',
  },
  {
    num: '06',
    name: 'Calculadora Python',
    description:
      'Calculadora com interface gráfica desenvolvida em Python usando Kivy. Suporta operações básicas de adição, subtração, multiplicação e divisão.',
    stack: ['Python', 'Kivy'],
    github: 'https://github.com/brunokemel/kivyCALC_py/tree/main',
  },
]