<template>
  <div class="app">
    <p>Текущее слово: {{currentWord}}</p>
        
    <div class="attempts" v-for="item, index in attempts" :key="index">  
      <div class="letter computed" v-for="letter,index in item" :key="index">
        {{letter}}
      </div>
    </div>
    
    <div class="letter" v-for="letter,index in currentWord" :key="index">
        {{currentAttempt[index]}}
      </div>
    
    <div class="keyboard" v-for="row in keyboard" :key="row">  
       <button class="button" v-for="button in row" :key="button" @click="addLetter(button)">{{button}}</button>
    </div>   
    
    <div>
      <button class="button" @click="deleteLetter">Удалить</button>
      <button class="button computed" @click="addAttempt">Отправить</button>
    </div>
    
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
div {
  float: inline;
  border: 1px dotted black;
}

.letter {
  background-color: bisque;
  margin: 2px;
  padding: 2px;
  border: 1px solid darkblue;
  width: min-content;
  display: inline-block;
}
</style>
