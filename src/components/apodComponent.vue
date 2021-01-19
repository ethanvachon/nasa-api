<template>
  <form @submit.prevent="searchDate()" class="mt-5">
    <input type="date" v-model="state.date">
    <button type="submit">Submit</button>
  </form>
  <apod-img
    :url="url"
    :desc="desc"
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
      url: computed(() => AppState.apod.url),
      desc: computed(()=> AppState.apod.explanation)
    }
  },
  components: {apodImg}
}
</script>

<style scoped>

</style>