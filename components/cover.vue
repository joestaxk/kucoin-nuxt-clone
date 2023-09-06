<template>
    <section class="relative z-2 w-full h-full md:mt-[4rem] mt-[3rem]">
      <div class="coverbg w-full h-[60vh] absolute z-0"></div>
      <!-- <div class="coverbg w-full h-full absolute z-0"></div> -->
      <!-- <div class="coversm w-full h-full absolute"></div> -->
      <!-- <img src="./coversvg.svg" class="absolute top-0 right-0 md:block xl:translate-x-0 translate-x-48"/> -->
      <div class="relative inset-0 z-10 flex justify-center items-center p-10 h-full z-3 md:pt-[7rem] pt-[5rem] pl-[1rem] translate-y- md:mb-10 md:translate-y-0">
        <div class="w-[1200px] pl-2 z-2">
            <h1 class="xl:text-[56px] lg:text-[3.4rem] md:text-[3rem] text-[2rem] leading-tight font-bold">{{ t("Find the Next") }}</h1>
            <h1 class="xl:text-[56px] lg:text-[3.4rem] md:text-[3rem] text-[2rem] z-index leading-tight font-bold"><span class="text-kcoin">{{ t("Crypto Gem") }}</span> {{ t("on ZiHuX") }}</h1>
            <p class="text-[rgba(29,29,29,0.4)] leading-relaxed mt-3 md:text-[1.3rem] text-sm">{{ t("1 Out of 4 Crypto Holders Worldwide Is with ZiHuX") }}</p>
      
            <div class="mt-[2rem] md:w-[500px] w-[300px]">    
              <div class="mb-2 overflow-hidden p-2 flex justify-between border border-gray-300 rounded-full">
                <input
                  type="text"
                  class="md:p-2 md:pl-3 w-full text-black-50 text-sm md:text-lg bg-transparent outline-none font-medium"
                  placeholder="Email/Phone Number"
                />
                <a>
                  <button
                    class="bg-black w-[180px] outline-none md:block hidden text-lg p-3 px-4 rounded-full text-white font-semibold"
                  >
                    {{ t("Sign Up Now ") }}&rarr;
                  </button>
                </a>
              </div>
              <button
                class="bg-black outline-none md:text-lg text-sm md:hidden block md:p-4 p-2 px-4 rounded-full text-white font-semibold"
              >
                {{ t("Sign Up Now ") }}&rarr;
              </button>
            </div>
        </div>
      </div>
    </section>
    
    <div class="flex xl:justify-center w-full p-5 md:mt-[7rem]">
      <div class="w-full md:w-full xl:w-[1200px] grid grid-cols-2 gap-5 md:flex md:justify-between justify-start md:items-center md:divide-x-2 divide-gray-200">
        <div class="">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold">200+</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">{{ t("Countries Covered") }}</p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold whitespace-nowrap">29 Million</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">{{ t("Global Investors") }}</p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.2rem] leading-relaxed font-bold">700+</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">{{ t("Coins") }}</p>
        </div>
  
        <div class="md:pl-10 w-1/2 md:w-auto">
          <h1 class="md:text-[1.7rem] text-[1.3rem] leading-relaxed whitespace-nowrap font-bold">$875.69 Million</h1>
          <p class="text-[rgba(29,29,29,0.4)] text-md whitespace-nowrap">{{ t("24h Trading Volume") }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      t(key) {
        // Replace with your translation function/method
        return key;
      },
    },
  };
  </script>