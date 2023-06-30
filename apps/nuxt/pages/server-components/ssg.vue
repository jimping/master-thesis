<script setup lang="ts">
import { useRoute } from '#app/composables/router'
import generatePeople from '~/utils/people'

const route = useRoute()
const count = Number(route.query.c) || 10
const people = generatePeople(count)

useHead({
  title: () => {
    return 'SSG - ' + count + ' Server Components'
  }
})
</script>

<template>
  <SliderServer :items="people" />
  <PeopleListServer :people="people" />
  <VimeoVideoServer />
</template>
