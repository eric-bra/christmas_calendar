import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faHeart,
    faMugHot,
    faGift,
    faCookieBite,
    faSnowman,
    faSleigh,
    faCandyCane
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeart)
library.add(faMugHot)
library.add(faGift)
library.add(faCookieBite)
library.add(faSnowman)
library.add(faSleigh)
library.add(faCandyCane)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
