<template>
  <div class="container-fluid">
    <div class="text-center">
    <h1>Space <img class="v" alt="Vue logo" src="./assets/logo.png">iew</h1>

    </div>
    <button class="btn btn-primary" @click="toggleTab('apod')">Picture of the day</button>
    <button class="btn btn-primary" @click="toggleTab('mars')">Mars Rover</button>

    <div>
      <apod-component v-if='state.apod'/>
      <mars-component v-if='state.mars'/>
    </div>
  </div>
  
</template>
<script>
import {computed} from 'vue'
import {reactive } from 'vue'
import apodComponent from './components/apodComponent.vue'
import marsComponent from './components/marsComponent.vue'
import {AppState} from "./AppState.js"
export default {
  name: 'App',
  setup(){
    const state = reactive({
      apod: true,
      mars: false
    })
    return{
      state,
      appState: computed(() => AppState),
      toggleTab(tab){
        if(tab == 'apod'){
          state.apod = true
          state.mars = false
        } else if(tab == 'mars'){
          state.apod = false
          state.mars = true
        }
      }
    }
  },
  components: {
    apodComponent,
    marsComponent
  }
}
</script>
<style>
  .v{
    height: 1em
  }

</style>