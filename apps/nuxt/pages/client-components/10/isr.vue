<script setup lang="ts">
import generatePeople from '~/utils/people'

const slider = generatePeople(5)
const list = generatePeople(4)
</script>

<template>
  <SliderClient :items="slider" />
  <PeopleListClient :people="list" />
  <VimeoVideoClient />
</template>
