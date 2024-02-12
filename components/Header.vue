<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))
const links = [{
  label: 'Members',
  to: '/members'
}, {
  label: 'Newsroom',
  to: '/newsroom'
}, {
  label: 'Progress',
  to: '/progress'
}]

const { header } = useAppConfig()
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <ULink>
        <IconNTStadium class="h-8" />
      </ULink>
    </template>

    <template v-if="header?.search" #center>
      <UDocsSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UDocsSearchButton v-if="header?.search" :label="null" class="lg:hidden" />

      <!-- TODO: consider xs screen size for breakpoint -->
      <UColorModeButton v-if="header?.colorMode" />
      <ULink class="hidden sm:flex items-center ">
        <UIcon name="i-simple-icons-linkedin" />
      </ULink>
      <template v-if="header?.links">
        <!-- <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        /> -->
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
