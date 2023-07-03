<script setup lang="ts">
import generatePeople from '~/utils/people'

const people = generatePeople(1000)
</script>

<template>
  <SliderServer :items="people" />
  <PeopleListServer :people="people" />
  <VimeoVideoServer />
</template>
