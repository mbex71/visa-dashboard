<template>
  <div
    class="w-full h-screen overflow-y-auto bg-slate-800 border-slate-800 lg:pt-6"
  >
    <div
      id="docs-sidebar"
      class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full bg-slate-800 border-slate-800"
    >
      <div class="px-6">
        <a
          class="flex-none text-xl font-semibold text-white"
          href="#"
          aria-label="Brand"
          >Visa Indonesia</a
        >
      </div>
      <nav
        class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul class="space-y-1.5">
          <SidebarLink to="/dashboard" title="Dashboard">
            <template #icon>
              <HomeIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/service" title="Service">
            <template #icon>
              <LayersIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/order" title="Order">
            <template #icon>
              <BookIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/customer" title="Customer">
            <template #icon>
              <UsersIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/customer-identity" title="Customer Identity">
            <template #icon>
              <BriefcaseIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/promo-code" title="Promo Code">
            <template #icon>
              <TagIcon />
            </template>
          </SidebarLink>
          <SidebarLink to="/admin" title="Admin User">
            <template #icon>
              <UserIcon />
            </template>
          </SidebarLink>
        </ul>
      </nav>
    </div>

    <div
      class="bg-white text-slate-700 min-h-screen px-8 py-8 flex flex-col gap-4 lg:ml-80 lg:rounded-ss-[3rem]"
    >
      <!-- Navigation Toggle -->
      <button
        type="button"
        class="text-slate-500 hover:text-slate-600 lg:hidden ring-1 rounded p-1 ring-slate-400 w-12 flex justify-center"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle Navigation</span>
        <MenuIcon />
      </button>
      <!-- End Navigation Toggle -->
      <div class="my-4">
        <h1 class="text-2xl font-semibold text-slate-800">{{ props.title }}</h1>
        <p class="text-sm text-slate-600/50">{{ props.subTitle }}</p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
  TagIcon,
  BookIcon,
  UsersIcon,
  BriefcaseIcon,
  UserIcon,
  LayersIcon,
  MenuIcon,
} from "lucide-vue-next";
import { defineProps } from "vue";

type TProps = {
  title: string;
  subTitle?: string;
};

// const layoutCustomProps = useAttrs();
// console.log(layoutCustomProps.title);

const toggle = useState("toggle", () => true);
const props = defineProps<TProps>();
</script>
