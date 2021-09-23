<template>
    <div>
        <button  class="btn btn-primary" @click="$emit('on:click')">
        
        <i class="fas fa-2x"
            :class="icon"></i>
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            icon:{
               type:String, 
               default: 'fa-plus'
            } 

        }
       
    }
</script>

<style lang="scss" scoped>
    button{
        position: fixed;
        bottom: 40px;
        right:40px;
        border-radius: 100%;
    }
</style>