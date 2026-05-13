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
    name: 'projeto fullstack venda de corridas',
    description:
      'Aplicação fullstack para venda de corridas, com backend em Node.js e frontend em Next.js, utilizando API de compras integrada mercado pago',
    stack: ['Node.js', 'TypeScript', 'Supabase', 'Next.js', 'PostgreSQL', 'Mercado Pago API'],
    demo: 'https://1kmzinho.com.br',
    github: 'https://github.com/1kmzinhogit/api_1kmzinho',
    highlight: true,
  },
  {
    num: '02',
    name: 'Gerador de Planos de Aula',
    description:
      'Aplicação backend em TypeScript que gera planos de aula usando a API Generative AI (Gemini) e persiste os planos no Supabase.',
    stack: ['Node.js', 'TypeScript', 'Supabase', 'React', 'Generative AI'],
    github: 'https://github.com/brunokemel/Gerador-de-Planos',
    highlight: false,
  },
  {
    num: '03',
    name: 'API CRUD',
    description:
      'API de usuários em Python com FastAPI, MySQL e SQLAlchemy, com CRUD completo, autenticação JWT e validação de dados.',
    stack: ['Python', 'FastAPI', 'MySQL', 'JWT', 'Pydantic'],
    github: 'https://github.com/brunokemel/api_crud',
  },
  {
    num: '04',
    name: 'Robô figurinhas whatsapp',
    description:
      'Robô para WhatsApp que gera figurinhas a partir de imagens enviadas, utilizando TypeScript',
    stack: ['Node.js', 'TypeScript', 'Baileys', 'Sharp', 'FFmpeg'],
    github: 'https://github.com/brunokemel/boot_figurinha_kemel',
  },
  {
    num: '05',
    name: 'Previsão do Tempo CLI',
    description:
      'Aplicação de linha de comando que busca a temperatura atual de uma cidade usando a API OpenWeatherMap.',
    stack: ['Python', 'Open-Meteo', 'CLI'],
    github: 'https://github.com/brunokemel/previs-o_temp',
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