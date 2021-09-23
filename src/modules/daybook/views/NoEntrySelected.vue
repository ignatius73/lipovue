<template>
    <div class="d-flex justify-content-center">
        <h3 class="align-self-center">Aquí no hay nada seleccionado</h3>
      <div class="d-flex flex-column justify-content-center">
       <fab />
    </div>   
    </div>
   <div class="d-flex flex-column justify-content-center">
       <fab class="buttonFloat"
            @on:click="createNewEntry" />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
        components:{
            fab: defineAsyncComponent( ()=> import(/*webpackchunkName:"Fabutton" */ '../components/Fab.vue'))
              
        },
        methods:{
            createNewEntry(){
                console.log("Estoy reaccionando al boton")
                this.$router.push({ name: 'entry-view', params:{ id: 'new'}})
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
    


</style>