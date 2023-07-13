<script setup lang="ts">
import generatePeople from '~/utils/people'

const slider = generatePeople(125)
const list = generatePeople(124)
</script>

<template>
  <SliderClient :items="slider" />
  <PeopleListClient :people="list" />
  <VimeoVideoClient />
</template>
