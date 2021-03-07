<template>
    <div class="toDoListeApp">
        <div class="header"> 
            <h1>ToDoListe</h1> 
            <h2> {{TitreToDoListe}} </h2> 
        </div>
        
        <div class="main">
            <div> 
                listeDesTache
                {{listeDesTache}} 
            </div>
            <div class="mainTodoListe"> 
                <div> sousTitre1 {{sousTitre1}} </div>
                <div>
                    <input type="text" class="new-toDoListe" placeholder="Ajouter une tache" v-model="newTodo" @keyup.enter="addToDoListe" >    
                </div>    
                <div>
                    <ul class="toDoListe-liste"> 
                        <li class="toDoListe" v-for="todo in filtreToDoListe" :key="todo.id" :class="{completed: todo.completed}"> <!-- class="toDoListe" ou class="toDoListe Completed"-->
                            <div class="view">
                                <input class="toggle" type="checkbox" v-model="todo.completed" >
                                <label> {{todo.name}} </label>
                                <button class="destroy" @click.prevent="supresionToDo(todo)" ></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer class="flooter"> 
                    <span class="toDoListe-Count" > <strong> {{ nbTacheRestante }} </strong> tache à faire </span>

                    <ul class="filtre" >
                        <li> 
                            <a href="#" :class="{selection: filtre === 'all'}" @click.prevent="filtre = 'all'"> Tout </a> 
                        </li>
                        <li> 
                            <a href="#" :class="{selection: filtre === 'faire'}" @click.prevent="filtre = 'faire'"> A faire </a> 
                        </li>
                        <li> 
                            <a href="#" :class="{selection: filtre === 'fin'}" @click.prevent="filtre = 'fin'"> Faites </a> 
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
                filtre: 'all',
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
            }
        },
        computed: 
        {
            nbTacheRestante () 
            {
                return this.todoliste.filter(todo => !todo.completed).length
            },
            
            filtreToDoListe()
            {
                switch (this.todoliste) 
                {
                    case 'faire':
                        return this.todoliste(todo => !todo.completed)

                    case 'fin':
                        return this.todoliste(todo => !todo.completed)
                
                    default:
                        return this.todoliste
                }
            }
        }
    }
</script>

<style src="./toDoListe.css" >


</style>
