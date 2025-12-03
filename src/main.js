import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import languages from './lang/index.js'

const app = createApp(App)

app.use(router)
app.use(languages)

app.mount('#app')
