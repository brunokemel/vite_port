import type { IconType } from 'react-icons';
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRender,
  SiSelenium,
  SiSqlite,
  SiStyledcomponents,
  SiSupabase,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';
import {
  FaArrowsRotate,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaNetworkWired,
  FaRobot,
  FaTable,
} from 'react-icons/fa6';

export interface Skill {
  name: string;
  icon: IconType;
  iconColor: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  color: string;
  items: Skill[];
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Back-End',
    description: 'APIs, serviços e integração entre aplicações',
    color: '#1764a5',
    featured: true,
    items: [
      { name: 'Python', icon: SiPython, iconColor: '#3776ab' },
      { name: 'Node.js', icon: SiNodedotjs, iconColor: '#5fa04e' },
      { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, iconColor: '#c9a500' },
      { name: 'FastAPI', icon: SiFastapi, iconColor: '#009688' },
      { name: 'Express.js', icon: SiExpress, iconColor: '#353535' },
      { name: 'APIs REST', icon: FaNetworkWired, iconColor: '#1764a5' },
      { name: 'Integração entre sistemas', icon: FaArrowsRotate, iconColor: '#1764a5' },
      { name: 'JWT', icon: SiJsonwebtokens, iconColor: '#b143b8' },
    ],
  },
  {
    category: 'Front-End',
    description: 'Interfaces web e desenvolvimento de aplicações',
    color: '#315ea8',
    items: [
      { name: 'React', icon: SiReact, iconColor: '#149eca' },
      { name: 'Vue.js', icon: SiVuedotjs, iconColor: '#42b883' },
      { name: 'HTML5', icon: SiHtml5, iconColor: '#e34f26' },
      { name: 'CSS3', icon: SiCss3, iconColor: '#1572b6' },
      { name: 'Styled Components', icon: SiStyledcomponents, iconColor: '#db7093' },
      { name: 'Vite', icon: SiVite, iconColor: '#646cff' },
    ],
  },
  {
    category: 'Banco de Dados',
    description: 'Modelagem, consultas e persistência de dados',
    color: '#347556',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, iconColor: '#4169e1' },
      { name: 'MySQL', icon: SiMysql, iconColor: '#4479a1' },
      { name: 'Supabase', icon: SiSupabase, iconColor: '#3ecf8e' },
      { name: 'SQLite', icon: SiSqlite, iconColor: '#1684c7' },
      { name: 'Prisma ORM', icon: SiPrisma, iconColor: '#263c55' },
      { name: 'SQL', icon: FaDatabase, iconColor: '#347556' },
    ],
  },
  {
    category: 'Automação e RPA',
    description: 'Automação de tarefas e processamento de dados',
    color: '#a45e12',
    items: [
      { name: 'Automações com Python', icon: SiPython, iconColor: '#3776ab' },
      { name: 'Selenium', icon: SiSelenium, iconColor: '#43b02a' },
      { name: 'Web Scraping', icon: FaGlobe, iconColor: '#3478a8' },
      { name: 'Processos RPA', icon: FaRobot, iconColor: '#a45e12' },
      { name: 'Processamento de dados', icon: FaTable, iconColor: '#347556' },
      { name: 'Integração de serviços', icon: FaArrowsRotate, iconColor: '#1764a5' },
    ],
  },
  {
    category: 'Ferramentas e Infraestrutura',
    description: 'Versionamento, desenvolvimento e deploy',
    color: '#536b83',
    items: [
      { name: 'Git', icon: SiGit, iconColor: '#f05032' },
      { name: 'GitHub', icon: SiGithub, iconColor: '#24292f' },
      { name: 'Docker', icon: SiDocker, iconColor: '#2496ed' },
      { name: 'Linux', icon: SiLinux, iconColor: '#333333' },
      { name: 'Postman', icon: SiPostman, iconColor: '#ff6c37' },
      { name: 'Render', icon: SiRender, iconColor: '#4351e8' },
      { name: 'VS Code', icon: FaCode, iconColor: '#007acc' },
    ],
  },
];
