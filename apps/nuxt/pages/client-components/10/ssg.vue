<script setup lang="ts">
import generatePeople from '~/utils/people'

const people = generatePeople(10)
</script>

<template>
  <SliderClient :items="people" />
  <PeopleListClient :people="people" />
  <VimeoVideoClient />
</template>
