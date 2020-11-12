<template>
  <div>
    <h1>AsyncShow组件{{ result }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({
          result: '2020-11-10'
        })
      }, 2000)
    })
  }
})
</script>