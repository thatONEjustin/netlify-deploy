import type { Alpine } from 'alpinejs'

import intersect from '@alpinejs/intersect'

import slideshow from './slideshow'

export default (Alpine: Alpine) => {
  console.log('Alpine!')

  Alpine.plugin(slideshow)
  Alpine.plugin(intersect)
}
