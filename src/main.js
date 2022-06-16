import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import StarRating from 'vue-star-rating/dist/VueStarRating.common'

import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App)

app.use(router)
app.component('star-rating', StarRating);

app.mount('#app')

VueCookieNext.config({ expire: '7d' })

VueCookieNext.setCookie("books","[{\"name\": \"Harry Potter e a pedra filosofal\",\"categories\": [\"Aventura\", \"Juvenil\"],\"price\": \"30.90\",\"promo\": true,\"img\": \"harry.jpg\"},{\"name\": \"Harry Potter e a pedra filosofal\",\"categories\": [\"Aventura\", \"Juvenil\"],\"price\": \"30.90\",\"promo\": true,\"img\": \"harry.jpg\"},{\"name\": \"Harry Potter e a pedra filosofal\",\"categories\": [\"Aventura\", \"Juvenil\"],\"price\": \"30.90\",\"promo\": true,\"img\": \"harry.jpg\"}]");
