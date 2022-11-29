<template>
  <div>
    <h3>Список попыток</h3>
    <p>Текущее слово: {{currentWord}}</p>
    <p>Список попыток: {{attempts}}</p>
    
    <div v-for="item in attempts" :key="item">  
      <Attempt :word="item"/>
    </div>
    <div></div>

    <p>Текущая попытка: {{currentAttempt}}</p>

    <input v-model="currentAttempt"/><p/>
    
    <div v-for="row in keyboard" :key="row">  
       <button v-for="button in row" :key="button" @click="addLetter(button)">{{button}}</button>
    </div>   
    
    <div>
      <button @click="addAttempt">+attempt</button>
    </div>
    
  </div>
</template>

<script lang="ts">
import {defineComponent}from 'vue'
import Attempt from './components/Attempt.vue'
import {useWords} from './service/useWords'

export default defineComponent({
  components:{Attempt},
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
div {
  float: inline;
  border: 1px dotted black;
}
</style>
