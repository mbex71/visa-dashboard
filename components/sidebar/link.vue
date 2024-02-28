<template>
  <li>
    <NuxtLink
      :to="props.to"
      class="inline-block w-full p-2 rounded hover:bg-slate-500"
      >{{ props.title }}</NuxtLink
    >
  </li>
</template>

<script setup lang="ts">
type TProps = {
    title:string
    to:string
}

import { defineProps } from "vue";
const props = defineProps<TProps>();
</script>
