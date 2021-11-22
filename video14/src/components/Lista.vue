<!-- Este componente solo será el título de la página -->
<template>
    <div>
        <ul class="list-group">
            <!-- Capturamos el index en el for del objeto y lo pasamos a aumentar -->
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{index}}: {{item.nombre}}
                <span >{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger w-100" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<!-- Para llamarlo necesitaremos el script -->
<script>

import{mapState,mapMutations} from 'vuex';

export default {
    name:'Lista', //para llamarlo
    //mapeamos el state
    computed:{
        ...mapState(['frutas']),

        // arrayOrdenado(){//ordenar el array, con javascript puro, se suele poner a y b
        //     return this.frutas.slice().sort((a,b)=>b.cantidad - a.cantidad); // si queremos de menos a mayor, ponemos a-b en vez de b-a
        // }

        /*lo anterior del video no va en este caso ya que porque cdo creó el proyecto usó Babel y vueX, pero no "es-Lint" 
        o como se llame, que lo que hace básicamente es no dejarte compilar si no cumplís con todas sus "reglas". 
        Es decir te obliga a codear con todas las buenas prácticas y eso se supone es mejor, 
        pero a veces marca errores por cosas que no deberían serlo*/
        arrayOrdenado(state){
            return state.frutas.sort( (a , b) => b.cantidad - a.cantidad)
        }
    },methods: {
        ...mapMutations(['aumentar','reiniciar'])
    },
}
</script>
