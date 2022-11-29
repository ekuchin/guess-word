import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

    const words = ref(wordslist)
    const currentWord = "весна"
    const attempts=ref(["весна","осень","зима","лето"])
    const currentAttempt = ref("")

    const addAttempt = () => {
        attempts.value = [...attempts.value, currentAttempt.value] 
      }

    return { words, currentWord, attempts, currentAttempt, addAttempt }
}