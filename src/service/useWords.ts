import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

  const keyboard =["ЙЦУКЕНГШЩЗХЪ", "ФЫВАПРОЛДЖЭ", "ЯЧСМИТЬБЮ"]

  const currentWord = ref("")
  const attempts=ref([""])
  const currentAttempt = ref("")
  const gameInProgress = ref(false)  
  const currentLevel = ref(0)

  const setLevel = (level:number) => {currentLevel.value = level}
 
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
      const wordsArray = currentLevel.value == 0 ? wordslist : wordslist.filter(
        (word) => {return word.length == currentLevel.value}
      )
      console.log(wordsArray[0])
      currentWord.value = wordsArray[Math.floor(Math.random() * wordsArray.length)].toString()
      attempts.value = []
      currentAttempt.value = ""
    }

    startGame()

    return {
      keyboard,
      currentWord, gameInProgress, startGame,
      currentLevel, setLevel,
      attempts, currentAttempt, submitAttempt, submitAllowed,
      addLetter, deleteLetter, 
    }
}