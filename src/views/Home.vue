<template>
<div class="toDoListeApp">


 <div class="header"> 
    <h1>ToDoListe</h1> 
    <h2> {{TitreToDoListe}} </h2> 
  </div>
  <div class="main"> 
    <div class="mainTodoListe"> 
      <div>
        <input type="text" class="new-toDoListe" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="ajouter()">
      </div>
    </div>
  </div>

  <div class="flooter">
    <input type="radio" v-model="selected" value="Tous" id="tous" v-on:change="updateOptionTous()">
    <label for="study">Tous</label> &nbsp;
    <input type="radio" v-model="selected" value="A faire" id="afaire" v-on:change="updateOptionAfaire()">
    <label for="study">A faire</label> &nbsp;
    <input type="radio" v-model="selected" value="Fini" id="fini" v-on:change="updateOptionFini()">
    <label for="study">Fini</label><br>
    <p>Votre option：{{selected}}</p>
  </div>

 <div>
     <!-- <ul> -->
     <ul class="toDoListe-liste">
        <li class="toDoListe" v-for="todo in filteredtodos" v-bind:key="todo.id" :class="{completed: todo.completed}">
            <todo :id="todo.id"></todo>
            
        </li>
     </ul>
 </div>

{{compteur}}
 
 </div>

   
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Todo from '@/components/Todo.vue';

    export default {
        name: 'Home',
        components: {
            Todo,
            
        },
        data(){
            return{
                newTodo:'',
                filter: 'all',
                selected:''
            }

        },
        methods: {
            ...mapActions("todolist", ['load']),
            
            updateOptionTous(){
              this.filter="all"
            },

            updateOptionAfaire(){
              this.filter="todo"
            },

            updateOptionFini(){
              this.filter="done"
            },

            ajouter(){
              this.todos.push({
                id: this.todos.length+1,
                name: this.newTodo,
                completed: false
              })

              
              this.newTodo='';

            },
           
            
        },

        created() {
            this.load()
        },
        
        computed: {
            ...mapGetters("todolist", ['getTodo','todos']),

             compteur(){
             

              let fini = this.todos.filter(todo => todo.completed)  //this.todos.filter
              let unfini = this.todos.filter(todo=>!todo.completed)
             

              if(fini.length==0&&unfini.length==0){
                return "pas de tâche"
              }else{
                return "Tâche fini: "+ fini.length +"\n"+ "Tâche Totale: " + this.todos.length
              }
              
              
            },

            filteredtodos(){
              if(this.filter==='todo'){
                return this.todos.filter(todo=>!todo.completed)
              }else if(this.filter==='done'){
                return this.todos.filter(todo => todo.completed)
              }
              return this.todos
            }
        }
    }
</script>


<style src="./../components/toDoListe.css" > </style>