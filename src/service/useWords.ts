import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

  const keyboard =["ЙЦУКЕНГШЩЗХЪ", "ФЫВАПРОЛДЖЭ", "ЯЧСМИТЬБЮ"]

  const currentWord = ref("")
  const attempts=ref([""])
  const currentAttempt = ref("")
  const gameInProgress = ref(false)  

  const addLetter = (letter:string) => {
    if (currentAttempt.value.length < currentWord.value.length){
      currentAttempt.value += letter
    }      
  }

    const deleteLetter = () => {
      if (currentAttempt.value.length >0){
        currentAttempt.value = currentAttempt.value.substring(0, currentAttempt.value.length-1)
      }      
    }

    const submitAttempt = () => {
      if (!submitAllowed()) return  
      attempts.value = [...attempts.value, currentAttempt.value]
      if (currentWord.value === currentAttempt.value.toLowerCase()){        
        gameInProgress.value = false
      }
      currentAttempt.value = ""
    }

    const submitAllowed = ()=>{
      return currentAttempt.value.length === currentWord.value.length
    }

    const startGame = () => {     
      gameInProgress.value = true
      currentWord.value = wordslist[Math.floor(Math.random() * wordslist.length)].toString()
      attempts.value = []
      currentAttempt.value = ""
    }

    startGame()

    return {
      keyboard,
      currentWord, gameInProgress, startGame,
      attempts, currentAttempt, submitAttempt, submitAllowed,
      addLetter, deleteLetter, 
    }
}