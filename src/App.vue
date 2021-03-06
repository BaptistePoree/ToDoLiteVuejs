<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <todoliste > </todoliste>
  </div>
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



