<template>
    <div 
        class="mb-3 pointer p-2 entry-container"
        @click="$router.push({ name: 'entry-view', params:{ id: 10 }})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">21</span>
            <span class="mx-1 fs-5 fw-bold">Septiembre</span>
            <span class="text-success fs-5 fw-bold">2021</span>
        </div>
        <div class="entry-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eius sunt at soluta sed architecto quis minima labore unde voluptates nisi accusantium, maiores, neque eaque. Harum amet a culpa blanditiis.</p>
        </div>
    </div>
</template>

<script>
    export default {

        
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