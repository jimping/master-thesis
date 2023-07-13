<script setup lang="ts">
import generatePeople from '~/utils/people'

const slider = generatePeople(500)
const list = generatePeople(499)
</script>

<template>
  <SliderClient :items="slider" />
  <PeopleListClient :people="list" />
  <VimeoVideoClient />
</template>
