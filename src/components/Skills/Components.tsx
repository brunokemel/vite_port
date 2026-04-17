export interface SkillGroup {
  category: string;
  color: string;
  items: string[];
}
 
export const skillGroups: SkillGroup[] = [
  {
    category: 'languages',
    color: '#4ade80',
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'frontend',
    color: '#60a5fa',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Material-UI'],
  },
  {
    category: 'backend',
    color: '#f59e0b',
    items: ['Node.js', 'Express', 'REST APIs','Selenium automation '],
  },
  {
    category: 'databases',
    color: '#f87171',
    items: ['SQL', 'Supabase', 'PostgreSQL'],
  },
];
 