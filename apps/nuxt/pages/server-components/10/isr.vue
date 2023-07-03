<script setup lang="ts">
import generatePeople from '~/utils/people'

const people = generatePeople(10)
</script>

<template>
  <SliderServer :items="people" />
  <PeopleListServer :people="people" />
  <VimeoVideoServer />
</template>
