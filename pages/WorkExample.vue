
<template>
  <UContainer>
    <UCard class=" sm:hidden pb-6 h-[55vh] overflow-clip mx-12 " :ui="{ divide: '', header: 'px-0'}">
      <template #header>
        <div class="relative h-[25vh] ">
          <div class="absolute opacity-60 dark:mix-blend-overlay h-[25vh] w-full overflow-hidden ">
            <img src="/images/members-stand.jpg" class=" h-full w-full object-cover ">
          </div>
          <div class="absolute inset-0 flex h-full items-center justify-center text-white">
            Enter Company Logo 1
          </div>
        </div>
      </template>
      <template #default>
        <div class=" h-full  px-4 py-5 sm:p-6">
          Description of study performed.
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
