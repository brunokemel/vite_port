import { 
  Code as CodeIcon,
  Storage as StorageIcon,
  Brush as BrushIcon,
  Devices as DevicesIcon
} from '@mui/icons-material';


export const skills = [
  {
    icon: <CodeIcon />,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    icon: <StorageIcon />,
    title: 'Backend',
    items: ['Node.js', 'Express', 'SQL', 'MongoDB', 'REST APIs', 'Python', 'C']
  },
  {
    icon: <BrushIcon />,
    title: 'Design',
    items: ['Styled Components', 'Material UI', 'Responsive Design', 'UI/UX']
  },
  {
    icon: <DevicesIcon />,
    title: 'Ferramentas',
    items: ['Git', 'VS Code', 'npm', 'Postman', 'Figma']
  }
];