<script setup lang="ts">
import generatePeople from '~/utils/people'

const slider = generatePeople(500)
const list = generatePeople(499)
</script>

<template>
  <SliderServer :items="slider" />
  <PeopleListServer :people="list" />
  <VimeoVideoServer />
</template>
