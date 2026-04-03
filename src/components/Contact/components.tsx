export interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
}
 
export const contactLinks: ContactLink[] = [
  {
    icon: '✉',
    label: 'Email',
    value: 'br.kemel@gmail.com',
    href: 'mailto:br.kemel@gmail.com?subject=Contato%20Profissional&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20com%20você%20sobre...',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/brunokemel',
    href: 'https://github.com/brunokemel',
  },
  {
    icon: '↗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/bruno-kemel',
    href: 'https://www.linkedin.com/in/bruno-kemel/',
  },
  {
    icon: '◈',
    label: 'Instagram',
    value: '@kemel.js',
    href: 'https://www.instagram.com/kemel.js/',
  },
]
 