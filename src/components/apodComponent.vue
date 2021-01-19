<template>
  <form @submit.prevent="searchDate()" class="mt-5">
    <input type="date" v-model="state.date">
    <button type="submit">Submit</button>
  </form>
  <apodImg
    :url="url"
  />
</template>

<script>
import {reactive} from 'vue'
import {computed} from 'vue'
import {imageService } from "../services/ImageService.js"
import { AppState } from "../AppState.js"
import apodImg from "./apodImg"
export default {
  name: 'apod',
  setup(){
    const state = reactive({
      date: '',
    })
    return{
      state,
      searchDate(){
        imageService.findApodImage(state.date)
      },
      url: computed(() => AppState.apod)
    }
  },
  components: {apodImg}
}
</script>

<style scoped>

</style>