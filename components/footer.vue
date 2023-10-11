<template>
    <section class="h-[100vh] w-full flex justify-center p-10">
        <div class="xl:w-[1200px] w-full pb-10">
            <div class="">
                <img src="/zihux_logo.svg" class="-translate-x-10" alt="logo">
            </div>

            <div class="md:grid grid-cols-4 flex flex-wrap px-5 gap-5 mt-5">
              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Corporate</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in corporate" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>

              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Products</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in products" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>

              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Service</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in service" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>

              <!-- <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Business</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in business" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div> -->

              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Legal</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in legal" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>

              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Crypto Prices</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in CryptoPrices" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>


              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Learn</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in Learn" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>
<!-- 
              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">Developer</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in Developer" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div> -->

              <div class="mt-[3rem]">
                <h2 class="text-md text-gray-800 mb-3 font-bold">App Download</h2>
                <ul class="space-y-1">
                   <li class="text-sm text-gray-500" v-for="item in AppDownload" :key="item"><a href="#">{{ item }}</a></li>
                </ul>
              </div>


            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
              corporate: [
                "About Us",
                "Join Us",
                // "Media Kit",
                "Affiliate Program",
                "Blog",
                "News & Announcements",
                "Referral",
                "Security"
              ],
              products: [
                "Spot Trading",
                "Margin Trading",
                "Convert",
                "Futures Trading",
                // "KuCoin Earn",
                "Trading Bot",
                "Converter"
              ],
              service: [
                "Help Center",
                "Submit a Ticket",
                "Fees"
              ],

            // business :[
            //   "Token Listing",
            //   "KuCoin Labs",
            //   "KuCoin Ventures",
            //   "Spotlight Application",
            //   "P2P Merchant Application",
            //   "Safeguard Program"
            // ], 
            legal: [
            "Terms of Use",
            "Privacy Policy",
            "Risk Disclosure Statement",
            "AML & CFT",
            // "Special Treatment",
            // "KuCoin Plus",
            // "Law Enforcement Requests"
            ],
            CryptoPrices: [
            "Bitcoin (BTC) Price",
            "Ethereum (ETH) Price",
            "Ripple (XRP) Price",
            // "KuCoin Token (KCS) Price",
            // "More Prices"
            ],
            Learn: [
              "Buy Bitcoin",
              "Buy Ethereum",
              "Buy XRP",
              "Buy Monero",
              "Buy Solana",
              "Buy tomiNet",
              "Buy Stellar",
              "Buy Ton",
              "Buy Terra",
              "Buy SHIBA INU"
            ],
            AppDownload: [
              "Android Download",
              "iOS Download"
            ]
            }
        }
    }
</script>