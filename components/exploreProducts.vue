<template>
    <section class="w-full h-full flex justify-center"
        :style="{ background: 'rgba(0, 0, 0, 0) linear-gradient(rgba(43, 83, 238, 0) 0%, rgba(70, 88, 241, 0.07) 30.73%, rgba(72, 98, 199, 0.12) 100%) repeat scroll 0% 0%' }">
        <div class="xl:w-[1200px] xl:p-0 p-5 w-full flex flex-col items-center">
            <div class="py-10 mt-10">
                <h1 class="lg:text-4xl md:text-3xl text-xl text-center font-semibold">Explore KuCoin Products & Services</h1>
            </div>

            <div class="w-full md:mt-6 md:py-8">
                <div class=" w-full flex flex-wrap gap-8">
                    <div class="lg:w-[48%] w-full bg-white relative md:p-11 p-5 rounded-xl cursor-pointer hover:-translate-y-2 transition-all duration-300"  v-for="data in explore" :key="data.name">
                        <div class="flex md:justify-between md:gap-0 gap-3 items-center mb-4">
                            <h2 class="md:text-2xl text-lg font-semibold">{{ data.name }}</h2>
                            <span class="text-lg font-bold">&rarr;</span>
                        </div>
                        <div class="flex items-center">
                            <p class="text-gray-500 md:w-1/2 w-[80%] md:text-md text-sm">{{ data.desc }}</p>
                            <img :src="data.icon" alt="icon" class="absolute right-0 bottom-2 md:w-auto w-24">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            explore: [
                {
                    name: "Spot Trading",
                    icon: "/starIcon.svg",
                    desc: "Trade crypto with our comprehensive set of powerful tools to maximize your profits."
                },
                {
                    name: "Buy Crypto",
                    icon: "/card.svg",
                    desc: "Purchase crypto quickly and easily on our popular and industry-leading platform."
                },
                {
                    name: "Crypto Derivatives",
                    icon: "/stats.svg",
                    desc: "We are the best crypto exchange for trading crypto futures."
                },
                {
                    name: "KuCoin Earn",
                    icon: "/piggybank.svg",
                    desc: "Invest and earn steady income with the help of a professional asset manager."
                },
                {
                    name: "Trading Bot",
                    icon: "/robotface.svg",
                    desc: "Earn passive income round-the-clock without having to constantly monitor markets."
                },
                {
                    name: "Margin Trading",
                    icon: "/scale.svg",
                    desc: "Borrow, trade, and repay. Leverage your assets with margin trading."
                },
                {
                    name: "Leveraged Tokens",
                    icon: "/3xCoin.svg",
                    desc: "Amplify your investment returns by simply buying and selling leveraged tokens."
                },
                {
                    name: "Halo Wallet",
                    icon: "/wallet.svg",
                    desc: "A self-custody social wallet that allows you to easily discover, invest, and earn."
                }
            ]
        }
    }
}
</script>
