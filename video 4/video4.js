//instanciamos vue
const app = new Vue({
    el:'#app',
    data:{ 
        fondo:'bg-warning',
        fondo2:'bg-warning',
        color:false
    },
    methods:{
        cambiarColor(){
            console.log("click");
            this.color = !this.color;
        }
    },computed:{
   
    }
})