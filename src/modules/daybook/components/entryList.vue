<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                placeholder="Buscar Entrada"
                />
        </div>
        <div class="entry-scroll-area">
          
            <entry v-for="n in 100"
                :key="n" />

        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

    export default {
        components:{
            Entry: defineAsyncComponent( ()=> import(/*webpack.chunkName: "Entry" */
                                                '@/modules/daybook/components/Entry.vue'))
        }    
    }
</script>

<style lang="scss" scoped>
    input{ 
        display: block;
        width:94%;
        
    }
    .entry-list-container{
        border-right: 1px solid primary;
        height: calc(100vh - 56px);
    }
    .entry-scroll-area{
        height: calc(100vh - 120px);
        overflow: scroll;
    }
</style>