<template>
  <div class="mt-6 md:mt-8 md:mx-20"> <!--mx-auto mt-4 max-w-full space-y-4 px-8 xs:px-8 sm:px-10 lg:px-16 pb-16 w-[97%]-->
    <!--<NavBar />-->
    <div class="grid grid-cols-1 gap-10 md:grid md:grid-cols-[1fr,3fr] md:gap-20">
      <Navigation />
      <slot />
    </div>
  </div>
</template>