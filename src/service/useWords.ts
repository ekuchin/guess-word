import {ref} from 'vue'
import wordslist from '../data/wordslist'

export function useWords(){

    //const words = wordslist)
    const currentWord = ref(wordslist[Math.floor(Math.random() * wordslist.length)].toString())
    const attempts=ref([""])
    const currentAttempt = ref("")

    const keyboard =[
      "ЙЦУКЕНГШЩЗХЪ", "ФЫВАПРОЛДЖЭ", "ЯЧСМИТЬБЮ"
    ]

    //const generateRandomWord = ()=>{     
    //  currentWord.value = words.value[Math.floor(Math.random() * words.value.length)].toString()
   // }

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

    const addAttempt = () => {
        attempts.value = [...attempts.value, currentAttempt.value]
        currentAttempt.value = "" 
    }

    return {
       currentWord, keyboard,
       attempts, currentAttempt,
       //generateRandomWord,
       addLetter, deleteLetter, addAttempt
        }
}