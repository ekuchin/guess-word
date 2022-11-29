<template>
    <div v-for="letter,index in word" :key="index">
        {{letter}}
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Attempt",
  props: {
    word: {
      type: String,
      required: true
    },
  },
  setup(props) {
        const word = props.word
    return { word };
  },
});
</script>

<style scoped>
    div {
        background-color: bisque;
        margin: 2px;
        padding: 2px;
        border: 1px solid darkblue;
        width: min-content;
        display: inline-block;
    }
</style>