//aqui tenemos lo que ya vimos en el video  14-15-16, los elementos globales.
import { createStore } from 'vuex'

export default createStore({
  state: {
    //vamos a clocar nuestras frutas
    frutas:[
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
    ]
  },
  mutations: {
    aumentar(state,index){ // le pasamos el index de la fruta
      state.frutas[index].cantidad++;
    },
    reiniciar(state){
      //para reiniciar los valores de todas las frutas usamos un foreach
      state.frutas.forEach(elemento =>{
        elemento.cantidad = 0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
