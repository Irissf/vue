//instanciamos vue
const app = new Vue({
    el:'#app', //lo que está dentro de app se gestiona en vue
    data:{ //en data se gestionan las variables
        titulo:'Frutas',
        frutasO : [
            {nombre:'manzana',cantidad:10},
            {nombre:'pera',cantidad:0},
            {nombre:'plátano',cantidad:45}
        ],
        nuevaFruta:'' //la nueva fruta viajará desde el v-model del input
    },
    methods:{
        agregarFruta : function agregarFruta() {
            console.log('diste click');
            this.frutasO.push({ //necesitamos this para acceder a los datos de data
                //empujamos la nueva fruta dentro del array
                nombre:this.nuevaFruta, cantidad:0
            })
        }, 
        otroFormaDeEscribirMetodo (){
            //desde las últimas versiones podemos simplificar de esta manera
        }
    }
})