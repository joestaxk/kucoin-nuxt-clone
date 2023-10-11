<template>
    <section class="relative z-2 w-full h-full md:mt-[5rem] mt-[3rem]">
      <div class="coverbg w-full  h-full absolute left-0 z-0">
      </div>
      <div class="
        animate duration-900 transition-all hidden lg:flex
         flex-col items-center gap-[12px] absolute right-[200px] z-50 xl:top-[5%] top-[5%] p-[16px]
        border border-white bg-[rgba(255,255,255,0.4)] rounded-3xl w-[270px] min-h-[270px]">
           <div class="font-[700] text-[14px]  text-white text-center">Scan Qr Code to Download App</div>
           <div class="w-[200px]  h-[200px] flex items-center justify-center py-5 bg-white rounded-xl">
               <QrcodeVue :value="value" :size="size" level="H" />
           </div>
           <a href="" class="outline-none text-[rgb(0,158,119)] text-center font-[600] text-[14px] cursor-pointer leading-[130%] hover:text-[#45ba9d]">View More &rarr;</a>
        </div>

      <div class="relative inset-0 z-10 flex justify-center items-center p-10 h-full z-3 md:pt-[7rem] pt-[5rem] pl-[1rem] md:mb-10 ">
        <div class="w-[1200px] pl-2 z-2">
            <h1 class="xl:text-[50px] lg:text-[3.4rem] md:text-[3rem] text-[2rem] leading-tight font-bold">{{ t("Find the Next") }}</h1>
            <h1 class="xl:text-[50px] lg:text-[3.4rem] md:text-[3rem] text-[2rem] z-index leading-tight font-bold"><span class="text-kcoin">{{ t("Crypto Gem") }}</span> {{ t("on ZiHuX") }}</h1>
            <p class="text-[rgba(29,29,29,0.4)] leading-relaxed mt-3 md:text-[1.3rem] text-sm">{{ t("1 Out of 4 Crypto Holders Worldwide Is with ZiHuX") }}</p>
      
            <div class="mt-[4rem] md:w-[500px] w-[300px]">    
              <div class="mb-2 overflow-hidden p-2 flex justify-between border border-gray-300 rounded-full">
                <input
                  type="text"
                  class="md:p-2 md:pl-3 w-full text-black text-sm md:text-lg bg-transparent outline-none font-medium"
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
    
    <div class="flex xl:justify-center w-full p-5 mt-[7rem] ">
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
  import QrcodeVue from 'qrcode.vue'
  export default {
    data() {
      return {
        value: 'https://example.com',
        size: 180
      }
    },
    methods: {
      t(key) {
        // Replace with your translation function/method
        return key;
      },
    },
    components: {
        QrcodeVue
    }
  };
  </script>


<style scoped>
  .animate {
    animation: 2.2s linear 0s infinite alternate none running animation-f032ca;
    animation-play-state: running;

  }
  .animate:hover {
    animation-play-state: paused;
  }
  @keyframes animation-f032ca {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(20px);
    }
  }
</style>