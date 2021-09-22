<template>
    <div>
        <navbar />
        <div class="d-flex">
            <div class="col-4">
                <entry-list />
            </div>
            <div class="col"><router-view /></div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

    export default {
        components:{
            Navbar: defineAsyncComponent( ()=>import(/*webpackChunkName: "Navbar" */ '@/modules/daybook/components/navbar')),
            entryList: defineAsyncComponent( ()=>import(/*webpackChunkName: "EntryList" */ '@/modules/daybook/components/entryList'))
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>

