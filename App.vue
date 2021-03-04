<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <todoliste msg=" "/>
</template>

<script>
import todoliste from './components/toDoListe.vue'

export default {
  name: 'App',
  newTodo: ' ' ,
  filter : 'all',
  components: 
  {
    todoliste
  },
  data()
  {
    todoliste[
      {
        id: 1,
        name : 'tache 1',
        completed : false
      },
      {
        id: 1,
        name : 'tache 1',
        completed : false
      }
    ]
    
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

