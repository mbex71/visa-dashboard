<template>
  <li>
    <NuxtLink
      :to="props.to"
      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-800 text-slate-400 hover:text-white hover:bg-slate-50/15 focus:outline-none focus:ring-1 focus:ring-gray-600"
    >
      <!-- class="inline-block w-full p-2 rounded hover:bg-slate-500" -->
      <div class="flex space-x-2 items-center">
        <slot name="icon" />
        <span>{{ props.title }}</span>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
type TProps = {
  to: string;
  title: string;
};

import { defineProps } from "vue";
const props = defineProps<TProps>();
</script>
