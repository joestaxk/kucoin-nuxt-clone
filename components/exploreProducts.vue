<template>
    <section class="w-full min-h-[110vh] flex justify-center"
        :style="{ background: 'rgba(0, 0, 0, 0) linear-gradient(rgba(43, 83, 238, 0) 0%, rgba(70, 88, 241, 0.07) 30.73%, rgba(72, 98, 199, 0.12) 100%) repeat scroll 0% 0%' }">
        <div class="xl:w-[1100px] xl:p-0 p-5 w-full flex flex-col items-center">
            <div class="py-10 mt-10">
                <h1 class="lg:text-4xl md:text-3xl text-2xl text-center font-semibold">Explore KuCoin Products & Services</h1>
            </div>

            <div class="w-full mt-6">
                <div class=" w-full flex flex-wrap gap-8">
                    <div class="xl:w-[48%] w-full bg-white p-11 rounded-xl cursor-pointer hover:-translate-y-2 transition-all duration-300"  v-for="data in explore" :key="data.name">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="md:text-2xl text-lg font-semibold">{{ data.name }}</h2>
                            <span class="text-lg font-bold">&rarr;</span>
                        </div>
                        <p class="text-gray-500 md:text-md text-sm">{{ data.desc }}</p>
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
                    desc: "Trade crypto with our comprehensive set of powerful tools to maximize your profits."
                },
                {
                    name: "Buy Crypto",
                    desc: "Purchase crypto quickly and easily on our popular and industry-leading platform."
                },
                {
                    name: "Trading Bot",
                    desc: "Earn passive income round-the-clock without having to constantly monitor markets."
                },
                {
                    name: "Margin Trading",
                    desc: "Borrow, trade, and repay. Leverage your assets with margin trading."
                },
                {
                    name: "Leveraged Tokens",
                    desc: "Amplify your investment returns by simply buying and selling leveraged tokens."
                },
                {
                    name: "Halo Wallet",
                    desc: "A self-custody social wallet that allows you to easily discover, invest, and earn."
                }
            ]
        }
    }
}
</script>
