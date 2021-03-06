<template>
    <div class="toDoApp">
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
                    <input type="text" class="new-toDoListe" placeholder="Ajouter une tache" v-model="newTodo" >    
                </div>    
                <div>
                    <ul class="todo-liste"> 
                        <li class="toDoListe" v-for="todo in todoliste" :key="todo.id">
                            <div class="view">
                                <label> {{todo.name}} </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div> 
                    <div>
                        {{nbTacheAFaire}} tache à faire

                    </div>
                    <div> 
                        <button>Tout</button> 
                        <button>A faire</button> 
                        <button>Faites</button> 
                    </div>
                </div>
            </div>
        </div>       
    
    </div>
</template>

<script>
    

    export default {
        name: 'toDoApp',
          data()
        {
            return {
                todoliste: [
                {
                    id: 1,
                    name : 'tache 1',
                    completed : false
                },
                {
                    id: 2,
                    name : 'tache 2',
                    completed : false
                }
                ],
                newTodo: ' ' ,
                filter : 'all',
            }
            
        },
        components: {
            
        }
    }
</script>
