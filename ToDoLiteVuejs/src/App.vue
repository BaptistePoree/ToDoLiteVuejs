

<template>
<div class="container-fluid ">
  <nav class="navbar navbar-light bg-light nav-fill w-100  navbar-expand-lg">
  <a class="navbar-brand" href="/">Todo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav nav-fill w-100">
      <li class="nav-item active">
     <router-link  class ="nav-link" to="/">Home</router-link> 
      </li>
      <li class="nav-item">
   <router-link  class ="nav-link" to="/hello"> Helloworld</router-link>
      </li>
 <li class="nav-item">  <router-link class ="nav-link" to="/login">Login</router-link></li>
    <li class="nav-item"> <router-link  class ="nav-link" to="/inscription"> Inscription</router-link></li>
    </ul>


  </div>
</nav>
</div>
  <router-view/>


</template>


<script>
export default {
name:'nav'
}
</script>

