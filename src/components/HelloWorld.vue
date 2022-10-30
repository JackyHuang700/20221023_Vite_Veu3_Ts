<script setup lang="ts">
import {  ref, onMounted } from 'vue'
import { NewType } from "../types"
import { api_spotifyAlbumsGet } from "../composables/useApi";

defineProps<{
  msg: string
  data_count: NewType
}>()

const count = ref(0)
const title = ref<string>('瑄瑄')

/** */
onMounted(async () => {

  const data = await api_spotifyAlbumsGet()
  console.log('data: ', data);
})


</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ title }}</h1>

  <h2 v-on:click="$props.data_count.click">asdfasdd{{ $props.data_count.value  }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
