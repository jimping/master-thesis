<script setup lang="ts">
import generatePeople from '~/utils/people'

const slider = generatePeople(5)
const list = generatePeople(4)
</script>

<template>
  <SliderServer :items="slider" />
  <PeopleListServer :people="list" />
  <VimeoVideoServer />
</template>
