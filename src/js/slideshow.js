// swiper
import { Navigation, Controller } from 'swiper/modules';
import Swiper from 'swiper';

export default function (Alpine) {
  Alpine.directive(
    'swiper',
    async (element, { expression }, { evaluate }) => {
      let user_options = evaluate(expression)

      const default_options = {
        modules: [Navigation, Controller],
        navigation: {
          enabled: false,
        },
        centeredSlides: true,
        centeredSlidesBounds: true
      }

      const options = { ...default_options, ...Object(user_options) }

      const _slideshow = new Swiper(element, options)
    }
  )
}
