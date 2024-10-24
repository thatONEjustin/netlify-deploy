export type Skill = {
  label: string,
  icon: string,
  color: string,
  experience: {
    years: number,
    moreThan: boolean
  },
  categories: Array<string>
}

export const skills_data: Skill[] = [
  {
    'label': 'javascript (vanilla)',
    'icon': 'nf-dev-javascript_badge',
    'color': 'yellow',
    'experience': {
      'years': 20,
      'moreThan': true
    },
    'categories': [
      'all',
      'front-end',
      'back-end'
    ]
  },
  {
    'label': 'bootstrap',
    'icon': 'nf-md-bootstrap',
    'color': 'purple',
    'experience': {
      'years': 10,
      'moreThan': true
    },
    'categories': [
      'front-end',
    ]
  },
  {
    'label': 'php',
    'icon': 'nf-md-language_php',
    'color': 'purple',
    'experience': {
      'years': 15,
      'moreThan': true
    },
    'categories': [
      'back-end',
    ]
  },
  {
    'label': 'css',
    'icon': 'nf-dev-css3',
    'color': 'blue',
    'experience': {
      'years': 15,
      'moreThan': true
    },
    'categories': [
      'front-end'
    ]
  },
  {
    'label': 'twig',
    'icon': 'nf-seti-twig',
    'color': 'green',
    'experience': {
      'years': 6,
      'moreThan': false
    },
    'categories': [
      'front-end'
    ]
  },
  {
    'label': 'laravel',
    'icon': 'nf-fa-laravel',
    'color': 'red',
    'experience': {
      'years': 5,
      'moreThan': true
    },
    'categories': [
      'front-end',
      'back-end'
    ]
  },
  {
    'label': 'bash',
    'icon': 'nf-md-bash',
    'color': 'green',
    'experience': {
      'years': 3,
      'moreThan': false
    },
    'categories': [
      'back-end'
    ]
  },
  {
    'label': 'TypeScript',
    'icon': 'nf-md-language_typescript',
    'color': 'blue',
    'experience': {
      'years': 4,
      'moreThan': true
    },
    'categories': [
      'front-end',
      'back-end'
    ]
  },
  {
    'label': 'sass',
    'icon': 'nf-dev-sass',
    'color': 'pink',
    'experience': {
      'years': 5,
      'moreThan': true
    },
    'categories': [
      'front-end'
    ]
  },
  {
    'label': 'lua',
    'icon': 'nf-md-language_lua',
    'color': 'pink',
    'experience': {
      'years': 3,
      'moreThan': true
    },
    'categories': [
      'back-end'
    ]
  },
  {
    'label': 'rust',
    'icon': 'nf-dev-rust',
    'color': 'red',
    'experience': {
      'years': 1,
      'moreThan': false
    },
    'categories': [
      'back-end'
    ]
  },
  {
    'label': 'tailwindcss',
    'icon': 'nf-md-tailwind',
    'color': 'blue',
    'experience': {
      'years': 5,
      'moreThan': true
    },
    'categories': [
      'front-end'
    ]
  }
]
