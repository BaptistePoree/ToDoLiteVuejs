<template>
    <div class="home">
        <div> <h3> {{TitreToDoListe}} </h3> </div>
        <div> {{listeDesTache}} </div>
        <div> 
            <div> {{titre1}} </div>    
            <div>
                <ul> {{liste}} </ul>
            </div>
        <div> 
            <div>{{nbTacheAFaire}}</div>
            <div> 
                <button>Tout</button> 
                <button>A faire</button> 
                <button>Faites</button> 
            </div>
        </div>
        </div>
    
    </div>
</template>

<script>
    

    export default {
        name: 'Home',
        components: {
            
        }
    }
</script>
