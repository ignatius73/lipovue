<template>
    <div 
        class="mb-3 pointer p-2 entry-container"
        @click="$router.push({ name: 'entry-view', params:{ id: entry.id }})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-5 fw-bold">{{ month }}</span>
            <span class="text-success fs-5 fw-bold">{{ year }}</span>
        </div>
        <div class="entry-description">
            {{ shortText }}
        </div>
    </div>
</template>

<script>
import  getDayMonthYear  from '../helpers/getDayMonthYear'
    export default {
        props:{
            entry:{
                type:Object,
                required:true
            }
        },
        computed:{
            shortText(){
                return ( this.entry.body.length > 40 )
                        ? this.entry.body.substring(0,40) + '...'
                        : this.entry.body
            },
            day(){
                return getDayMonthYear(this.entry.date).day
            },
            month(){
                return getDayMonthYear(this.entry.date).month
            },
            year(){
                return getDayMonthYear(this.entry.date).year
            }
        }

        
    }
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: solid 1px #123e50;
        transition:0.2s all ease-in;
        
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition:0.2s all ease-in;
        }
       
    }
    .entry-description{
        font-size: 12px;
    }
    
</style>