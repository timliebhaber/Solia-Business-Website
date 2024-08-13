<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Referenzen</template>
    
    Hier stehen meine Referenzen
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Über mich</template>

    Ich bin ein studierter Informatiker mit Schwerpunkt in künstlicher Intelligenz. Ich bin interessiert an Neuroinformatik, KI und Blockchain-Technologie, Web Entwicklung und Software Engineering.
    Mehr über mich findest du auf meinem
    <a href="https://www.linkedin.com/in/tim-liebhaber/" target="_blank" rel="noopener">LinkedIn</a>.
  </WelcomeItem>
  </template>