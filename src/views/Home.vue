<template>
<div>


 <div class="create">
  <input type="text" v-model="newTodo" @keyup.enter="ajouter()">
 <!-- <button v-on:click="ajouter()" disabled v-if="detecter()">Ajouter</button>-->
  <!--<button v-on:click="ajouter()"   >Ajouter</button>-->
</div>



<div class="option">
  <input type="radio" v-model="selected" value="Tous" id="tous" v-on:change="updateOptionTous()">
  <label for="study">Tous</label> &nbsp;
  <input type="radio" v-model="selected" value="A faire" id="afaire" v-on:change="updateOptionAfaire()">
  <label for="study">A faire</label> &nbsp;
  <input type="radio" v-model="selected" value="Fini" id="fini" v-on:change="updateOptionFini()">
  <label for="study">Fini</label><br>
  <p>Votre option：{{selected}}</p>
</div>

 <div class="home">
     <ul style="list-style-type: none">
        <li v-for="todo in filteredtodos" v-bind:key="todo.id">
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


