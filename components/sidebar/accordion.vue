<template>
  <li class="hs-accordion" id="users-accordion">
    <button
      type="button"
      class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-400 rounded-lg hover:bg-slate-50/15 bg-slate-800 hover:text-slate-300 hs-accordion-active:text-white focus:outline-none focus:ring-1 focus:ring-slate-600"
    >
      <slot name="icon" />
      {{ props.title }}

      <svg
        class="hs-accordion-active:block ms-auto hidden size-4 group-hover:text-slate-500 text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>

      <svg
        class="hs-accordion-active:hidden ms-auto block size-4 group-hover:text-slate-500 text-slate-400"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>

    <div
      id="users-accordion"
      class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
    >
      <ul class="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
        <!-- Sub Menu -->
        <li
          class="hs-accordion"
          id="users-accordion-sub-1"
          v-for="item in props.subMenu"
          :key="item.key"
        >
          <SidebarLink v-if="item.to" :to="item.to" :title="item.title" />

          <button
            v-else
            type="button"
            class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg hover:bg-slate-50/15 bg-slate-800 text-slate-400 hover:text-slate-300 hs-accordion-active:text-white focus:outline-none focus:ring-1 focus:ring-slate-600"
          >
            {{ item.title }}
            <template v-if="item.children">
              <svg
                class="hs-accordion-active:block ms-auto hidden size-4 group-hover:text-slate-500 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>

              <svg
                class="hs-accordion-active:hidden ms-auto block size-4 group-hover:text-slate-500 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </template>
          </button>

          <div
            v-if="item.children"
            id="users-accordion-sub-1"
            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
          >
            <ul class="pt-2 ps-2">
              <SidebarLink
                v-for="children in item.children"
                :key="children.key"
                :to="(children.to as string)"
                :title="children.title"
              >
              </SidebarLink>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
type TMenu = {
  key: string;
  to?: string;
  title: string;
};

type TSubmenu = TMenu & {
  children?: TMenu[];
};
type TProps = {
  title: string;
  subMenu: TSubmenu[];
};

import { defineProps } from "vue";
const props = defineProps<TProps>();
</script>
