<template>
    <div>
        <h1>Galeria de fotos : </h1>

        <!-- para navegar entre las dierentes fotos, le mandamos a la ruta de nombre Fotos el parámetro item -->
        <router-link :to="{name: 'Fotos', params:{id:item}}" 
        v-for="(item,index) of fotosArreglo" :key="index">  
        <!--Al pinchar me envia al :id 1, al hacer un router-link toma la ruta
        donde está alojado, y en este caso solo le cambia el parámetro que se envia-->
            <button>foto {{item}}</button>    
        </router-link>

        <Foto/>

        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="sigiente">Siguiente</button>
    </div>
</template>

<script>
import Foto from "@/components/Foto.vue"
export default {
    components:{
        Foto
    },
    data(){
        return{
            fotosArreglo:[1,2,3]
        }
    },methods: {
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    },
}
</script>