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
        nuevaFruta:'',
        total :0
    },
    methods:{
        agregarFruta : function agregarFruta() {
            this.frutasO.push({ //necesitamos this para acceder a los datos de data
                //empujamos la nueva fruta dentro del array
                nombre:this.nuevaFruta, cantidad:0
            })
            this.nuevaFruta = '';//al usarlo lo limpiamos para vaciar el input
        }, 
        otroFormaDeEscribirMetodo (){
            //desde las últimas versiones podemos simplificar de esta manera
        }
    },computed:{
        sumarFrutas(){ //detectará cuando cambia cantidad y recalculará
            //variables con calculos
            this.total = 0; // que parta en 0
            for(fruta of this.frutasO){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;//retornamos el nuevo valor
        }
    }
})