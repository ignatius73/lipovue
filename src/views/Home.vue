<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>

    <button @click="GoToDayBook" class="btn btn-primary">Botones con Sass</button>
    <button @click="GoToDayBook" class="btn btn-secondary">Botones con Sass</button>
    <button @click="GoToDayBook" class="btn btn-success">Botones con Sass</button>

  </div>
</template>

<script>


export default {
  methods:{
    GoToDayBook(){
      this.$router.push({ name: 'dayBook'})
    }
  }
}
</script>
