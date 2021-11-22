<!-- Este componente solo será el título de la página -->
<template>
    <div class="text-center">
        <!-- con @ ya busca el la carpeta assets y nos ahorramos ir poniedno puntitos apra subir carpetas -->
        <img alt="Vue logo" src="@/assets/logo.png"> 
        <h1>Futas</h1>
    </div>
</template>

<!-- Para llamarlo necesitaremos el script -->
<script>
export default {
    name:'Cabecera' //para llamarlo
}
</script>
