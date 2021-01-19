<template>
  <img
    :src="url"
  >
</template>

<script>
export default {
  name: 'apodImg',
  props: {
    url: String
  }

}
</script>