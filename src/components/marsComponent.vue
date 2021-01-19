<template>
  <form @submit.prevent="searchDate()" class="mt-5">
    <input type="number" max="1000" v-model="state.date">
    <button type="submit">Submit</button>
  </form>
  <mars-img
    :v-if="img"
    :img="img"
  />
</template>
<script>
import {reactive} from 'vue'
import {computed} from 'vue'
import {imageService } from "../services/ImageService.js"
import { AppState } from "../AppState.js"
import marsImg from "./marsImg"
export default {
  name:"mars",
  setup(){
    const state = reactive({
      date:''
    })
    return{
      state,
      searchDate(){
        imageService.findMarsImage(state.date)
      },
      img: computed(()=> AppState.mars),
    }
  },
  components: {marsImg}
}
</script>