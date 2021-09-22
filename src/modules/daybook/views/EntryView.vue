<template>
    <div class="entry-title d-flex  justify-content-between p-3">
        <div> 
            <span class="text-success fs-5 fw-bold pe-2">15</span>
            <span class="text-success fs-5 fw-200 p-1">Septiembre</span>
            <span class="text-success fs-5 fw-bold p-1">2021</span>
            
        </div>
        <div>
            <button class="btn btn-danger justify-self-end mx-2">
                Borrar
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary justify-self-end">
                Subir Foto
                <i class="fas fa-upload"></i>
            </button>
        </div>
       
    </div>     
    <hr>
    <div class="d-flex flex-column px-3 h-75">
            <textarea placeholder="Qué sucedió hoy?"></textarea>
    </div>
    <fab icon="far fa-save" />
    <img class="img-thumbnail" src='@/assets/handball.jpg' alt="handball" />
   
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
        components:{
            fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
               
        }
    }
</script>

<style lang="scss" scoped>
    textarea{
        font-size:15px;
        border:none;
        height:100%;
        resize: none;

        &:focus{
            outline: none;
        }

           
       
    }
    img{
        width:200px;
        position:fixed;
        bottom:150px;
        right:20px;
        box-shadow: 0px 5px 10px rgba($color: #00008f, $alpha: 0.5);
    }

</style>