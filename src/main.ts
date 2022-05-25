import { createApp } from 'vue'
import App from './App.vue'

// import { MessageClient } from './message-client'
import ObCommUI, { MessageClient } from 'ob-xw-common'
import '../node_modules/ob-xw-common/dist/style.css'

const app = createApp(App)
app.use(ObCommUI)
app.provide('client', new MessageClient())

app.mount('#app')
