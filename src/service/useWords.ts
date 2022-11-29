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
        currentAttempt.value += letter
    }

    const addAttempt = () => {
        attempts.value = [...attempts.value, currentAttempt.value]
        currentAttempt.value = "" 
      }

    return { words, currentWord, attempts, currentAttempt, addLetter, addAttempt, keyboard }
}