<template>
  <div class="app">
    <!-- <p>Текущее слово: {{currentWord}}</p>
    <p>{{gameInProgress}}</p> -->

     <!-- {{testClass(currentWord, attempts, 'А')}} -->

    <div class="attempts" v-for="item, index in attempts" :key="index">  
      <div :class="'letter '+letterClass(currentWord, item, index)" v-for="letter,index in item" :key="index">
        {{letter}}
      </div>
    </div>
    
    <div v-show="gameInProgress" class="letter" v-for="letter,index in currentWord" :key="index">
        {{currentAttempt[index]}}
      </div>
    
    <div class="keyboard" v-show="gameInProgress">
      <div class="keyboardRow" v-for="row in keyboard" :key="row">  
        <button :class="('keyboardButton '+buttonClass(currentWord, attempts, button))" v-for="button in row" :key="button" @click="addLetter(button)">{{button}}</button>
      </div>   
    </div>

    <div v-show="gameInProgress">
      <button class="button" @click="deleteLetter">Удалить</button>
      <button  :class="'button '+ (!submitAllowed() ? 'disabled' : '')" @click="submitAttempt">Отправить</button>
    </div>
    <div>
      <button class="button" @click="startGame">Новая игра</button>
    </div>
    
  </div>
</template>

<script lang="ts">
import {defineComponent}from 'vue'
import {useWords} from './service/useWords'

export default defineComponent({
  setup(){

    const letterClass = (currentWord:string, item:string, index:number)=>{      
      let letter = item[index].toLowerCase()
      if (currentWord.charAt(index)=== letter){
        return "correct"
      }
      
      if (currentWord.indexOf(letter)!=-1){
      //TODO из количества букв в слове вычесть те, что угаданы и столько первых букв присутствующих показать.
      let letter = item[index].toLowerCase()
      const sameLetters = currentWord.split(letter).length-1
      const correctPositions = currentWord.split("")
                                .map((element, currentIndex)=>{
                                  return element.toUpperCase() === item[currentIndex] && element === letter ? currentIndex : null                                 
                                })
                                .filter(el=>el!=null)
      const presentPositions = item.toLowerCase().split("")
                                .map((element, currentIndex)=>{
                                  return currentWord.indexOf(element)>-1 && element == letter && correctPositions.indexOf(currentIndex)==-1 ? currentIndex : null
                                })
                                .filter(el=>el!=null)     
      return presentPositions.slice(0,sameLetters - correctPositions.length).indexOf(index)>-1 ? "present" : ""
      }
      return ""
    }

    const buttonClass = (currentWord:string, attempts:string[], letter:string) => {
      
      const allLetters = attempts.join("").split("")
      const presentLetters = Array.from(new Set(allLetters))
      if (presentLetters.indexOf(letter)!=-1 && currentWord.indexOf(letter.toLowerCase())!=-1){return "present"}
      if (presentLetters.indexOf(letter)!=-1){return "absent"}
      return ""
    }
   
    return {...useWords(), letterClass, buttonClass}
  }
})
</script>

<style scoped>
div {
  float: inline;
  /* border: 1px dotted black; */
}

.letter {
  background-color: bisque;
  font-size: 1.5em;
  margin: 5px;
  
  padding: 5px;
  padding-top:9px;
  /*border: 1px solid darkblue;*/
  width: min-content;
  display: inline-block;
  min-width: 30px;
  min-height: 30px;
  border-radius: 8px;
  text-align: center;

  justify-content: center; /*Центрирование по горизонтали*/
  align-items: center;
}
.correct{
  background-color: #339476;
  color: #eaebed;
}

.present{
  background-color:#87e1c7;
  color: #41436a;  
}

.keyboard{
  border: 1px solid darkblue;
  border-radius: 4px;
}

.button{
  background-color: bisque;
  margin: 10px;
  border: 1px solid darkblue;
}

.absent{
  background-color: bisque;
}

.disabled{
  background-color: gray;
  border: 1px dashed darkblue;
  color:#eaebed;
  cursor: not-allowed;
}


</style>


