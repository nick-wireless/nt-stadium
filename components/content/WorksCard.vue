<script setup lang="ts">
export interface Props {
  image: string,
  header: string,
}

defineProps<Props>()

</script>
<template>
  <div class=" sm:hidden h-[55vh] overflow-clip mx-12 rounded-md shadow ring-1 ring-gray-200 dark:ring-gray-800">
    <div class="relative h-[25vh] ">
      <div class="absolute inset-0 opacity-60 dark:mix-blend-overlay h-[25vh] w-full overflow-hidden ">
        <img :src="image" class=" h-[25vh] w-full object-cover ">
      </div>
      <div class="absolute inset-0 flex h-full items-center justify-center text-white font-semibold text-2xl">
        {{ header }}
      </div>
    </div>

    <div class=" h-full px-4 py-5 sm:p-6 ">
      <slot />
    </div>
  </div>
</template>
