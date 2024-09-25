<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    
    <router-view></router-view> <!-- This is where the routed components will be displayed -->
  </div>
  <Home></Home>
  <Service></Service>
  <About></About>
  <Why></Why>
  <Team></Team>
  <Client></Client>
  <info></info>
  <Course></Course>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue';
import Home from './components/Home.vue';
import Service from './components/Service.vue';
import Why from './components/Why.vue';
import Team from './components/Team.vue';
import Client from './components/Client.vue';
import info from './components/info.vue';
import Course from './components/Course.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Home,
    Service,
    About,
    Why,
    Team,
    Client,
    info,
    Course,
  }
}
</script>

<style>
/* Add global styles here */
nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}
</style>
