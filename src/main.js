// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './assets/sass/colors.scss'
import './assets/sass/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUser)
library.add(faCalendar)
library.add(faGithub)
library.add(faStackOverflow)
library.add(faLinkedin)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
