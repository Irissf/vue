<template>
  <div class="container">
      <Cabecera></Cabecera>
      <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'App',
  components: { //para llamar a otros componentes
  //importados previamente
    Cabecera,
    Lista
  }
}
</script>

<style>

</style>
