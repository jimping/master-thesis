<script setup lang="ts">
const appName = 'Example App'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName}` : appName
  }
})
</script>

<template>
  <Html lang="de">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>
