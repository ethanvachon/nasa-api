<template>
  <div class="container-fluid">
    <div class="text-center">
    <h1>Space <img class="v" alt="Vue logo" src="./assets/logo.png">iew</h1>

    </div>
    <button class="btn btn-primary">Picture of the day</button>
    

    <div>
      <apod-component/>
    </div>
  </div>
  
</template>
<script>
import {computed} from 'vue'
import apodComponent from './components/apodComponent.vue'
import {AppState} from "./AppState.js"
export default {
  name: 'App',
  setup(){
    return{
      appState: computed(() => AppState)
    }
  },
  components: {
    apodComponent
  }
}
</script>
<style>
  .v{
    height: 1em
  }

</style>