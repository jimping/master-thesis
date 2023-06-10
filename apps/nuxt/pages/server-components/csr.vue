<script setup lang="ts">
import { useRoute } from '#app/composables/router'
import generatePeople from '~/utils/people'

const route = useRoute()
const count = Number(route.query.c) || 10
const people = generatePeople(count)

useHead({
  title: () => {
    return 'CSR - ' + count + ' Server Components'
  }
})
</script>

<template>
  <VimeoVideoServer />
  <PeopleListServer :people="people" />
</template>
