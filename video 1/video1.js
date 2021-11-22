//instanciamos vue
const app = new Vue({
    el:'#app', //lo que está dentro de app se gestiona en vue
    data:{ //en data se gestionan las variables
        titulo:'Array',
        titulo2:'Array de objetos',
        frutas : ['manzana', 'pera','plátano'],
        frutasO : [
            {nombre:'manzana',cantidad:10},
            {nombre:'pera',cantidad:0},
            {nombre:'plátano',cantidad:45}
        ]
    } 
})