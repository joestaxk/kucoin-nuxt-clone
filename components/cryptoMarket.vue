<template>
  <section class="w-full flex flex-col items-center mt-[2rem]">
    <div class="xl:w-[1100px] w-full xl:p-0 p-5">
      <div class="md:flex justify-between items-center">
        <h1 class="md:mb-0 mb-2 md:text-[2rem] text-[1.5rem] leading-tight font-bold">
          {{ t("Trending Assets") }}
        </h1>
        <a href="/markets" class="text-kcoin md:text-lg text-md font-bold">
          {{ t("View all 700+ coins &rarr;") }}
        </a>
      </div>

      <div ref="containerRef"
        class="xl:min-w-full snap-mandatory snap-x overflow-hidden transition-all scroll-smooth duration-150 flex justify-between gap-5 mt-[3rem]">
        <!--  -->
        <div
          class="pb-3 snap-center xl:min-w-[350px] md:min-w-[49%] min-w-full max-w-full min-h-[382px] rounded-[24px] border border-gray-200">
          <div class="p-5">
            <h3 class="border-l-[.4rem] pl-2 leading-[1] border-kcoin font-bold text-lg">
              {{ t("Hot List") }}
            </h3>
          </div>

          <ul>
            <li v-for="(item, index) in assetCoinPairs.slice(0, 5)" :key="index.toString()"
              class="flex justify-between items-center mt-2 hover:bg-gray-50 cursor-pointer p-2">
              <div class="w-full flex justify-between items-center">
                <div class="flex place-items-center gap-1">
                  <div class="w-[25px] h-[25px] grid place-content-center">
                    <img class="object-fill" :src="item.coin_icon || '/bitcoin.png'" alt="coin" />
                  </div>
                  <div class="ml-5">
                    <h4 class="font-bold text-md">{{ item.child_coin_name }}</h4>
                    <p class="text-gray-300">{{ item.parent_coin_name }}</p>
                  </div>
                </div>

                <div class="text-right">
                  <h4 class="font-medium text-md">{{ `$${item.last_price}` }}</h4>
                  <h4 :class="[
                    'text-green-500 font-semibold text-lg',
                    parseFloat(item.price_change) >= 0 ? 'text-green-500' : 'text-red-700'
                  ]">
                    {{ `$${parseFloat(item.price_change).toFixed(3)}` }}
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- New COINS -->
        <div
          class="pb-3 snap-center xl:min-w-[350px] md:min-w-[49%] min-w-full max-w-full min-h-[382px] rounded-[24px] border border-gray-200">
          <div class="p-5">
            <h3 class="border-l-[.4rem] leading-[1] pl-2 border-kcoin font-bold text-lg">
              {{ t("New Coins") }}
            </h3>
          </div>

          <ul>
            <li v-for="(item, index) in latestCoinPairs.slice(0, 5)" :key="index.toString()"
              class="flex justify-between items-center mt-2 hover:bg-gray-50 cursor-pointer p-2">
              <div class="w-full flex justify-between items-center">
                <div class="flex place-items-center gap-1">
                  <div class="w-[25px] h-[25px] grid place-content-center">
                    <img class="object-fill" :src="item.coin_icon || '/bitcoin.png'" alt="coin" />
                  </div>
                  <div class="ml-5">
                    <h4 class="font-bold text-md">{{ item.child_coin_name }}</h4>
                    <p class="text-gray-300">{{ item.parent_coin_name }}</p>
                  </div>
                </div>

                <div class="text-right">
                  <h4 class="font-medium text-md">{{ `$${item.last_price}` }}</h4>
                  <h4 :class="[
                    'text-green-500 font-semibold text-lg',
                    parseFloat(item.price_change) >= 0 ? 'text-green-500' : 'text-red-700'
                  ]">
                    {{ `$${parseFloat(item.price_change).toFixed(3)}` }}
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- TOP GAINERS -->
        <div
          class="pb-3 snap-center xl:min-w-[350px] md:min-w-[49%] min-w-full max-w-full min-h-[382px] rounded-[24px] border border-gray-200">
          <div class="p-4">
            <h3 class="border-l-[.4rem] leading-[1] pl-2 border-kcoin font-bold text-lg">
              {{ t("Top Gainers") }}
            </h3>
          </div>

          <ul>
            <li v-for="(item, index) in hourlyCoinPairs.slice(0, 5)" :key="index.toString()"
              class="flex justify-between items-center mt-2 hover:bg-gray-50 cursor-pointer p-2">
              <div class="w-full flex justify-between items-center">
                <div class="flex place-items-center gap-1">
                  <div class="w-[25px] h-[25px] grid place-content-center">
                    <img class="object-fill" :src="item.coin_icon || '/bitcoin.png'" alt="coin" />
                  </div>
                  <div class="ml-5">
                    <h4 class="font-bold text-md">{{ item.child_coin_name }}</h4>
                    <p class="text-gray-300">{{ item.parent_coin_name }}</p>
                  </div>
                </div>

                <div class="text-right">
                  <h4 class="font-medium text-md">{{ `$${item.last_price}` }}</h4>
                  <h4 :class="[
                    'text-green-500 font-semibold text-lg',
                    parseFloat(item.price_change) >= 0 ? 'text-green-500' : 'text-red-700'
                  ]">
                    {{ `${parseFloat(item.price_change).toFixed(3)}%` }}
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Left and Right Buttons -->
      <div class="flex mt-3 xl:hidden">
        <button class="p-2 border border-gray-300 rounded-full mr-2 text-3xl text-gray-700"
          @click="handleTranslate('left')">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
          </svg>
        </button>

        <button class="p-2 border border-gray-300 rounded-full text-3xl text-gray-700" @click="handleTranslate('right')">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- MAGIC BOX AND STEP GUIDE -->
    <div
      class="xl:w-[1100px] mt-[2rem] w-full min-h-[60vh] p-5 flex xl:justify-between items-center xl:flex-row flex-col">
      <div class="xl:w-1/2 xl:block hidden">
        <img src="/magicbox.png" width="400" height="400" class="object-cover" alt="magicbox" />
      </div>

      <div class="xl:w-[50%] w-full">
        <div class="mt-[2rem] mb-[3rem]">
          <h1 class="md:mb-0 mb-2 md:text-[2rem] leading-10 text-[1.5rem] font-bold">
            {{ t("New Users Only") }}
          </h1>
          <p class="text-[rgba(29,29,29,0.4)] leading-relaxed md:text-lg text-sm">
            {{ t("Start trading to get up to 3,200 USDT in rewards!") }}
          </p>
          <div class="flex justify-end">
            <a href="/markets" class="text-kcoin md:text-lg text-sm font-bold">
              {{ t("View all 700+ coins &rarr;") }}
            </a>
          </div>
        </div>

        <div class="xl:w-1/2 w-full flex justify-center p-5 xl:hidden">
          <img src="/magicbox.png" width="340" height="340" class="object-cover" alt="magicbox" />
        </div>

        <div v-for="(item, i) in newUser" :key="i.toString()" class="w-full">
          <div class="w-full md:flex items-center rounded-xl" :class="{ 'bg-[#dbe3ff5b]': i < 1, 'md:flex': i < 1 }">
            <div class="flex items-center grow   vgap-4 p-5">
              <div
                class="md:w-[45px] md:h-[45px] min-w-[32px] min-h-[32px] rounded-full text-[16px] flex items-center justify-center mr-3 font-bold border border-black"
                :class="{ 'bg-black': i < 1, 'bg-white': i < 1, 'bg-transparent': i >= 1 }">
                {{ i + 1 }}
              </div>

              <div class="">
                <h2 class="lg:text-xl md:text-lg text-md font-semibold">{{ item.value }}</h2>
                <p class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-md text-sm">{{ item.text }}</p>
              </div>
            </div>

            <div class="md:mr-3">
            <a v-if="i < 1" href="/signup"
              class="text-md md:w-auto md:inline whitespace-nowrap block w-full mt-3 text-center bg-black p-2 px-4 rounded-3xl font-semibold leading-6 text-gray-100">
              <span>{{ t("Sign Up") }}</span>
              <span class="ml-2">&rarr;</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
// import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/vue/24/outline";
import axios from "axios";
export default {

  data() {
    return {
      loading: false,
      assetCoinPairs: [
        // Your fake data for asset coin pairs here
      ],
      latestCoinPairs: [
        // Your fake data for latest coin pairs here
      ],
      hourlyCoinPairs: [
        // Your fake data for hourly coin pairs here
      ],
      newUser: [
        {
          value: "Sign Up",
          text: "Complete to receive up to 400 USDT in rewards.",
        },
        {
          value: "First Deposit/Buy Crypto",
          text: "Complete to receive up to 400 USDT in rewards.",
        },
        {
          value: "First Trade",
          text: "Complete to receive up to 1,400 USDT in rewards.",
        },
        {
          value: "Pro Trading Tasks",
          text: "Complete to receive up to 1,000 USDT in rewards.",
        },
      ]
    };
  },
  methods: {
    t(key) {
      // Replace with your translation function/method
      return key;
    },
    handleTranslate(direction) {
      const container = this.$refs.containerRef;
      const scrollAmount = container.clientWidth; // Show 2 children at a time
      const containerWidth = container.scrollWidth - container.clientWidth;
      const currentPosition = container.scrollLeft;

      if (direction === "left") {
        container.scrollLeft = Math.max(currentPosition - scrollAmount, 0);
      } else if (direction === "right") {
        container.scrollLeft = Math.min(currentPosition + scrollAmount, containerWidth);
      }
    },
  },
  mounted() {
    let $self = this;
    async function req() {
      try {
        const response = await axios.get('https://admin.tradexpro.xyz/api/common-landing-custom-settings', { headers: { lang: 'en', userapisecret: "h0vWu6MkInNlWHJVfIXmHbIbC66cQvlbSUQI09Whbp" } });
        if (!response?.data) {
          return $self.loading = true;
        } else {
          $self.loading = false;
          const { asset_coin_pairs, hourly_coin_pairs, latest_coin_pairs } = response?.data.landing_settings;
          $self.assetCoinPairs = asset_coin_pairs;
          $self.hourlyCoinPairs = hourly_coin_pairs;
          $self.latestCoinPairs = latest_coin_pairs;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    req()
  }
};
</script>