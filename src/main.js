import { createApp, h } from 'vue'
import App from './App.vue'
import twind from './twind'

createApp({
  render: () => h(App),
})
  .use(twind)
  .mount('#app')
