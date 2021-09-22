<template>
    <div class="d-flex justify-content-center">
        <h3 class="align-self-center">Aquí no hay nada seleccionado</h3>
      <div class="d-flex flex-column justify-content-center">
       <fab />
    </div>   
    </div>
   <div class="d-flex flex-column justify-content-center">
       <fab class="buttonFloat" />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
        components:{
            fab: defineAsyncComponent( ()=> import(/*webpackchunkName:"Fabutton" */ '../components/Fab.vue'))
              
        }
    }
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
    


</style>