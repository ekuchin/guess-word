import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

  const keyboard =["ЙЦУКЕНГШЩЗХЪ", "ФЫВАПРОЛДЖЭ", "ЯЧСМИТЬБЮ"]

  const currentWord = ref("")
  const attempts=ref([""])
  const currentAttempt = ref("")
  const gameInProgress = ref(true)  

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
      currentAttempt.value = "" 
    }

    const submitAllowed = ()=>{
      return currentAttempt.value.length === currentWord.value.length
    }

    const startGame = () => {     
      gameInProgress.value = true
      currentWord.value = wordslist[Math.floor(Math.random() * wordslist.length)].toString()
    }

    startGame()

    return {
      keyboard,
      currentWord, gameInProgress, startGame,
      attempts, currentAttempt, submitAttempt, submitAllowed,
      addLetter, deleteLetter, 
    }
}