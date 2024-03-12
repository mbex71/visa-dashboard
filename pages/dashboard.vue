<template>
  <NuxtLayout
    :name="layout"
    title="Welcome back, Administrator"
    sub-title="Track, manage and forecast your platform information here"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 my-8">
      <Card />
      <Card />
      <Card />
    </div>

    <div class="space-y-8 w-full overflow-x-auto">
      <DataTable
        v-model:selection="selectedProduct"
        :value="data"
        paginator
        size="small"
        :rows="5"
        stripedRows
        data-key="id"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        :tableStyle="{ 'min-width': '50rem' }"
        class="text-xs"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink "
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <Column selection-mode="multiple"></Column>
        <Column header="Code" field="id">
          <template #body="{ data }"> {{ data.id + 1 }} </template>
        </Column>
        <Column field="name" header="Name" sortable style="width: 30%">
        </Column>
        <Column style="width: 25%" field="main_category" header="Category">
          <template #body="{ data }">
            <div class="space-y-1">
              <div class="font-semibold">
                {{ data.main_category }}
              </div>
              <div class="font-semibold text-gray-400">
                {{ data.sub_category }}
              </div>
            </div>
          </template>
        </Column>

        <Column style="width: 25%" field="image" header="Image">
          <template #body="{ data }">
            <img :src="data.image" :alt="data.name" class="w-12" />
          </template>
        </Column>
        <Column style="width: 25%" field="link" header="Link">
          <template #body="{ data }">
            <a :href="data.link" target="_blank">{{ data.link }}</a>
          </template>
        </Column>
        <Column style="width: 25%" field="ratings" header="Ratings">
          <template #body="{ data }">
            <div class="flex flex-row justify-start items-center gap-2">
              <Star class="w-4" fill="yellow" stroke-width="1" />
              {{ data.ratings }}
            </div>
          </template>
        </Column>
        <Column
          style="width: 25%"
          field="discount_price"
          header="Discount"
        ></Column>
        <Column style="width: 25%" field="actual_price" header="Price"></Column>
      </DataTable>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import DataTable from "primevue/datatable";
import Paginator from "primevue/paginator";
import Rating from "primevue/rating";
import Column from "primevue/column";
import Row from "primevue/row";
import { ref } from "vue";
import { Star } from "lucide-vue-next";

type TProduct = {
  id: number;
  name: string;
  main_category: string;
  sub_category: string;
  image: string;
  link: string;
  ratings: string;
  no_of_ratings: string;
  discount_price: string;
  actual_price: string;
};

const { isLoading, data } = useQuery({
  queryKey: ["products"],
  queryFn: () => fetch("/api/products").then((res) => res.json()),
});

const selectedProduct = ref();
const metaKey = ref(true);

const layout = "dashboard";
</script>

<style>
@import url("primevue/resources/themes/aura-light-green/theme.css");

/* .p-paginator {
  font-size: 0.8rem;
} */

/* .p-paginator-rpp-options {
  font-size: 0.8rem;
} */
</style>
