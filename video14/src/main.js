import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

//la instancia de vue, llama a store
//Antes salia
/*
new Vue({
    store,
    render: h => h(App) //App se renderiza en una etiqueta llamada app que está en index.html
}).$smount('#app')
*/
createApp(App).use(store).mount('#app')
