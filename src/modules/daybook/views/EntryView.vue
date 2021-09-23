<template>
    <template v-if="entry">
        <div class="entry-title d-flex  justify-content-between p-3">
                <div> 
                    <span class="text-success fs-5 fw-bold pe-2">{{day}}</span>
                    <span class="text-success fs-5 fw-200 p-1">{{month}}</span>
                    <span class="text-success fs-5 fw-bold p-1">{{year}}</span>
                    
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
                    <textarea placeholder="Qué sucedió hoy?" v-model="entry.body"></textarea>
            </div>

        
    </template>
    
    <fab icon="far fa-save"
         @on:click="updateEntry" />
    <img class="img-thumbnail" src='@/assets/handball.jpg' alt="handball" />
   
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex'
import  getDayMonthYear  from '../helpers/getDayMonthYear'

    export default {
        props:{
            id:{
                type: String,
                required: true
            }
           
        },
        components:{
            fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
               
        },
        computed:{
            getId(){
                return (this.id)
            },
            ...mapGetters('daybook',['getEntriesById']),
            day(){
                return getDayMonthYear(this.entry.date).day
            },
            month(){
                return getDayMonthYear(this.entry.date).month
            },
            year(){
                return getDayMonthYear(this.entry.date).year
            }
        },
        data(){
           return { 
               entry:null
               }
        },
        methods: {
            //mapActions me crea un método accesible por mi component
             ...mapActions('daybook',['UpdateEntry', 'SaveEntry']),
            loadEntry(){
               let entry
               if ( this.id === 'new'){
                    entry = {
                        body: '',
                        date: new Date().getTime()
                    }

                }else{
                    entry =  this.getEntriesById(this.id)
                    if(!entry) return this.$router.push({ name: 'no-entry'})
                    
                }
                    this.entry = entry
                        
                },
            async updateEntry(){
                if ( this.entry.id ){
                  await this.UpdateEntry(this.entry)  
                }else{
                   
                 const id = await this.SaveEntry(this.entry) 
                 
                 this.$router.push({ name:'entry-view', params:{ id:id }})
                }
               
                
            }
        },
       
        created(){
           this.loadEntry()
        },

        watch:{
            id(){
                this.loadEntry()
            }


        },
        
                
           
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