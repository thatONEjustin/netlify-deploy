export type MenuItem = {
  label: string,
  href: string,
  icon: string,
  scrollTo?: string
}

export const menu_data: MenuItem[] = [
  {
    label: 'home',
    href: '#',
    icon: 'nf-custom-home',
    scrollTo: 'top'
  },
  {
    label: 'about',
    href: '#about-me',
    icon: 'nf-dev-terminal',
    scrollTo: 'about-me'
  },
  {
    label: 'skills',
    href: '#skills',
    icon: 'nf-md-keyboard',
    scrollTo: 'skills'
  },
  // {
  //   'label': 'blog',
  //   'href': '/blog',
  //   'icon': 'nf-md-pen'
  // },
]
