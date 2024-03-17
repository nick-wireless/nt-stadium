<script setup lang="ts">
// import { withoutTrailingSlash } from 'ufo'

const { data: page } = await useAsyncData('subscriptions', () => queryContent('/members/subscriptions').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const isAdult = ref(true)

// TODO:  Harlan... questions
// I've implemented the 'next and prev' from the NuxtContent, by activating Document Driven mode.
// This is a work around as I didn't know how to adapt the dynamic lookup below.
// I note, this page is 'glitchy'.  It doesn't load automatically.  The URI of '/subsciptions' works, however not directly from menu.
// Also, the page navigation on the surrounding pages ignores it.  I wonder the best approach here?

const { prev, next } = useContent()
const surroundingMenuItems = [ prev, next ]

// const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
//   .where({ _extension: 'md', navigation: { $ne: false } })
//   .only(['title', 'description', '_path'])
//   .findSurround(withoutTrailingSlash(route.path))
// )


</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero">
      <template #links>
        <UPricingToggle v-model="isAdult" :left="'Child'" :right="'Adult'" class="w-48" />
      </template> 
    </UPageHero>

    <UContainer>
      <UPricingGrid>
        <UPricingCard v-for="(plan, index) in page.plans" :key="index" v-bind="plan" :price="isAdult ? plan.price.adult : plan.price.child" " />
      </UPricingGrid>
    </UContainer>

    <ULandingSection>
      <ULandingLogos>
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400" />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection :title="page.faq.title" :description="page.faq.description">
      <ULandingFAQ :items="page.faq.items" multiple class="max-w-4xl mx-auto" />
    </ULandingSection>

    <UDocsSurround :surround="surroundingMenuItems" class=" px-6 pb-8 lg:pb-12 max-w-5xl mx-auto " />
  </div>
</template>
