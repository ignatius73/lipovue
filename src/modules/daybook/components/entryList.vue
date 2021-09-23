<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                placeholder="Buscar Entrada"
                v-model="term"
                />
        </div>
        <div class="mt-2 d-flex flex-column">
            <button class="btn btn-primary mx-2" @click="nuevaEntrada">
                <i class="fa fa-plus"></i>Nueva Entrada</button>
        </div>
        <div class="entry-scroll-area">
          
            <entry v-for="entry in entriesByTerm"
                :key="entry.id"
                :entry="entry" />


        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex' 

    export default {
        data(){
            return{
                term: ""
                }
           
        },
        components:{
            Entry: defineAsyncComponent( ()=> import(/*webpack.chunkName: "Entry" */
                                                '@/modules/daybook/components/Entry.vue'))
        },
        computed:{
            ...mapGetters('daybook', ['getEntriesByTerm']),
            entriesByTerm(){
                return this.getEntriesByTerm(this.term)
            }
        },
        methods:{
            nuevaEntrada(){
                this.$router.push({ name: 'entry-view', params: {id: 'new'} })
            }
        }
        
       
    }
</script>

<style lang="scss" scoped>
    input{ 
        display: block;
        width:94%;
        
    }
    button{
        width:90%;
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