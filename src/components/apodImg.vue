<template>
  <img
    :src="url"
  >
  <p>{{desc}}</p>
</template>

<script>
export default {
  name: 'apodImg',
  props: {
    url: String,
    desc: String
  }

}
</script>