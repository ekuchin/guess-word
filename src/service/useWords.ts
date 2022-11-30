import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

    const words = ref(wordslist)
    const currentWord = "весна"
    const attempts=ref([""])
    const currentAttempt = ref("")

    const keyboard =[
      "ЙЦУКЕНГШЩЗХЪ", "ФЫВАПРОЛДЖЭ", "ЯЧСМИТЬБЮ"
    ]

    const addLetter = (letter:string) => {
      if (currentAttempt.value.length < currentWord.length){
        currentAttempt.value += letter
      }      
    }

    const deleteLetter = () => {
      if (currentAttempt.value.length >0){
        currentAttempt.value = currentAttempt.value.substring(0, currentAttempt.value.length-1)
      }      
    }

    const addAttempt = () => {
        attempts.value = [...attempts.value, currentAttempt.value]
        currentAttempt.value = "" 
    }

    return { words, currentWord, attempts, currentAttempt, addLetter, deleteLetter, addAttempt, keyboard }
}