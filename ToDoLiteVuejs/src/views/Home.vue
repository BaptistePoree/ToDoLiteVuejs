<template>



    <div class="toDoListeApp">
        <div class="header"> 
            <h1>Listes to Do</h1> 
            <div> sousTitre1 {{sousTitre1}} </div>
            <h2> {{TitreToDoListe}} </h2> 

        </div>
        
        <div class="main">
            <div> 
                selectionné toute les taches
               <input  type="checkbox" v-model="tachedone" > 
               
            </div>
            <div class="mainTodoListe"> 
                
                <div>
                    <input type="text" class="new-toDoListe" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="addToDoListe" aria-placeholder="ajouter une tache" />    
                </div>    
                <div>
                    <ul class="toDoListe-liste"> 
                        <li class="toDoListe" v-for="todo in filtreToDoListe" :key="todo.id" :class="{completed: todo.completed}"> <!-- class="toDoListe" ou class="toDoListe Completed"-->
                            <div class="view">
                                <input  type="checkbox" v-model="todo.completed " class="toggle">
                                <label for="btn" > {{ todo.name }} </label>
                                
                                <button name="btn" class="destroy" @click.prevent="supresionToDo(todo)" ></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer class="flooter" v-show="todoliste.length> 0"> 
                    <span class="toDoListe-Count" > <strong> {{ nbTacheRestante }} </strong> tache à faire </span>

                    <ul class="filter" >
                        <li> 
                            <button href="#" :class="{selected:filter=== 'all'}" @click.prevent="filter= 'all'"> Toute </button> 
                        </li>
                        <li> 
                            <button href="#" :class="{selected:filter ==='faire'}" @click.prevent="filter= 'faire'"> Restes </button> 
                        </li>
                        <li> 
                            <button href="#" :class="{selected: filter ==='fin'}" @click.prevent="filter= 'fin'"> Faites </button> 
                        </li>
                    </ul>

                </footer>
            </div>
        </div>       
    
    </div>

</template>

<script>
    
    export default {
        name: 'toDoListeApp',
        data()
        {
            return {
                todoliste: [
                {
                    id: 1,
                    name: 'tache 1',
                    completed: false
                },
                {
                    id: 2,
                    name: 'tache 2',
                    completed: false
                }
                ],
                newTodo: ' ' ,
                filter: 'all',
            }
            
        },
        methods:
        {
            addToDoListe ()
            {
                this.todoliste.push({
                    id: 0,
                    name: this.newTodo,
                    completed: false
                }),
                this.newTodo= ''
            },
            supresionToDo (todo)
            {
                this.todoliste = this.todoliste.filter(tableToDo => tableToDo != todo )
                      //var index = indexWhere(this.todoliste, todo);
                this.todoliste.splice(todo.id)
            }
        },
        computed: {

            tachedone: {
                get(){
                  return this.nbTacheRestante ===0
                },
                set(value){
                 this.todoliste.forEach(todo =>{
                    todo.completed=value

                 })
              }

            },
            nbTacheRestante () 
            { if(this.filter==='faire'){
                return this.todoliste.filter(todo => !todo.completed).length
            } else if (this.filter==='fin'){
                return this.todoliste.filter(todo => todo.completed).length
            } 
             return this.todoliste.length
            },
            
            filtreToDoListe()
            {
                
                    
                    if(this.filter==='faire'){
                        return this.todoliste.filter(todo => !todo.completed)
                       
                    }else if(this.filter==='fin'){
                        return this.todoliste.filter(todo =>todo.completed)
                    }
                   return this.todoliste
                }
            
        }
    }
</script>

<style src="../components/toDoListe.css" >


</style>

