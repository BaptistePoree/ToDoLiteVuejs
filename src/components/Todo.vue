<template>
<div>

<div class="view">
    
    <h2>
        <!-- <input type="checkbox" name="cb" checked v-if="todo.completed" @change="updateComplete(todo)" >
        <input type="checkbox" name="cb" v-else @change="updateComplete(todo)">
        <label> {{todo.name}} </label>
        <button v-on:click="supprimer(todo)">supprimer</button> -->

        
        <input class="toggle" type="checkbox" name="cb" checked v-if="todo.completed" @change="updateComplete(todo)" >
        <input class="toggle" type="checkbox" name="cb" v-else @change="updateComplete(todo)">
        <label> {{todo.name}} </label>
        <button class="destroy" v-on:click="supprimer(todo)"></button> 
       
    </h2>
       <!-- -->
    
</div>

</div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: 'Todo',
        components:{
            
        },
        data() {
            return {
             
            }
        },
        props: {
            id: {type: String, default: "1"}
        },
        computed:{
            ...mapGetters('todolist', ['getTodo','todos']), //tous les getters
            
            todo(){
                return this.getTodo(this.id)
            },

          
        },
        methods:{
            supprimer(todo){
                console.log(this.todos)
                var i = this.todos.indexOf(todo)
                this.todos.splice(i, 1)
               
            },

            updateComplete(todo){
              if(todo.completed==false){
                todo.completed=true;
              }else if(todo.completed==true){
                todo.completed=false;
              }
            },

          
        }
    }

</script>