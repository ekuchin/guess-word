<template>
  <div>
    <h3>Список попыток</h3>
    <p>Текущее слово: {{currentWord}}</p>
    <p>Список попыток: {{attempts}}</p>
    <p>Текущая попытка: {{currentAttempt}}</p>

    <input v-model="currentAttempt"/> 
    <h3>Здесь будет клавиатура</h3>
    <button @click="addAttempt">+attempt</button>
  </div>
</template>

<script lang="ts">
import {defineComponent}from 'vue'
import {useWords} from './service/useWords'

export default defineComponent({
  setup(){   
    return {...useWords()}
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
