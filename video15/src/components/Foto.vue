<template>
    <div>
        <!-- Con {{$route.params.id}} mandamos el id de la foto -->
        <h1>Foto desde componente:{{$route.params.id}}</h1> 
    </div>
</template>

<script>
export default {
    name:'Foto'
}
</script>