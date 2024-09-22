<template>
    <span class="typewriter">
    {{ displayText }}<span class="cursor" aria-hidden="true"></span>
    </span>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue'
  
  // Definiere die Props, die die Komponente akzeptiert
  const props = defineProps<{
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    waitTime?: number
  }>()
  
  // Setze Standardwerte für optionale Props
  const words = props.words
  const typingSpeed = props.typingSpeed ?? 150
  const deletingSpeed = props.deletingSpeed ?? 75
  const waitTime = props.waitTime ?? 1000
  
  // Reactive States
  const wordIndex = ref(0)
  const letterIndex = ref(0)
  const isDeleting = ref(false)
  const displayText = ref('')
  
  let timeout: number
  
  const type = () => {
    const currentWord = words[wordIndex.value]
    
    if (isDeleting.value) {
      // Löschen
      letterIndex.value--
      displayText.value = currentWord.substring(0, letterIndex.value)
      
      if (letterIndex.value === 0) {
        isDeleting.value = false
        wordIndex.value = (wordIndex.value + 1) % words.length
        timeout = window.setTimeout(type, typingSpeed)
      } else {
        timeout = window.setTimeout(type, deletingSpeed)
      }
    } else {
      // Tippen
      letterIndex.value++
      displayText.value = currentWord.substring(0, letterIndex.value)
      
      if (letterIndex.value === currentWord.length) {
        // Warten, bevor gelöscht wird
        isDeleting.value = true
        timeout = window.setTimeout(type, waitTime)
      } else {
        timeout = window.setTimeout(type, typingSpeed)
      }
    }
  }
  
  onMounted(() => {
    if (words.length > 0) {
      type()
    }
  })
  
  onBeforeUnmount(() => {
    clearTimeout(timeout)
  })
  </script>
  
  <style scoped>
  .typewriter{
    display: inline;
    white-space: nowrap;
    font-size: inherit; 
    overflow: hidden;
    font-family: 'Haas', sans-serif, monospace;
    font-weight:200;
    border-right: 2px #ffffff9f solid;
    position: relative;
  }
  
  .cursor {
    display: inline-block;
    width: 2px;
    background-color: currentColor;
    margin-left: 5px;
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  </style>
  