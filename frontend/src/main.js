import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { store } from './store'
import router from './router'
import axios from 'axios'
loadFonts()
axios.defaults.baseURL = 'http://localhost:8000/'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')