<template>
    <section class="w-full  md:mt-[5rem] mt-[3rem]">            
            <div class="flex justify-center">
                <div class="w-[1200px] xl:p-0 p-5">
                    <h1 class="flex mb-10 font-bold md:text-4xl text-2xl">FAQ</h1>

                    <div v-for="(item, index) in faqs" :key="index" class="bg-gray-100 p-5 rounded-2xl mb-5 overflow-hidden transition duration-200">
                        <div class="flex  justify-between item-center" @click="accordian(index)">
                            <h2 class="text-[1.3rem] font-semibold text-gray-700 text-sm p-5">{{ item.question }}</h2>
                            
                            <button v-if="!accordianState[index]">
                                <svg class="w-6 h-6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor"><path d="M554.656 341.344a42.656 42.656 0 00-85.312 0v128h-128a42.656 42.656 0 000 85.312h128v128a42.656 42.656 0 0085.312 0v-128h128a42.656 42.656 0 000-85.312h-128v-128z"></path><path d="M512 42.656C252.8 42.656 42.656 252.768 42.656 512S252.768 981.344 512 981.344c259.2 0 469.344-210.112 469.344-469.344S771.232 42.656 512 42.656zM128 512c0-212.096 171.904-384 384-384s384 171.904 384 384-171.904 384-384 384-384-171.904-384-384z"></path></svg>
                            </button>
                            <button v-if="accordianState[index]">
                                <svg class="w-6 h-6" width="1.5em" height="1.5em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="ic_trade_add"><path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M14.0003 1.16699C6.91249 1.16699 1.16699 6.91249 1.16699 14.0003C1.16699 21.0882 6.91249 26.8337 14.0003 26.8337C21.0882 26.8337 26.8337 21.0882 26.8337 14.0003C26.8337 6.91249 21.0882 1.16699 14.0003 1.16699ZM3.50033 14.0003C3.50033 8.20116 8.20116 3.50033 14.0003 3.50033C19.7995 3.50033 24.5003 8.20116 24.5003 14.0003C24.5003 19.7995 19.7995 24.5003 14.0003 24.5003C8.20116 24.5003 3.50033 19.7995 3.50033 14.0003Z" fill="#1D1D1D"></path><path id="Union_2" d="M12.8337 12.834H9.33366C8.68933 12.834 8.16699 13.3563 8.16699 14.0007C8.16699 14.645 8.68933 15.1673 9.33366 15.1673H12.8337H15.167H18.667C19.3113 15.1673 19.8337 14.645 19.8337 14.0007C19.8337 13.3563 19.3113 12.834 18.667 12.834H15.167H12.8337Z" fill="#1D1D1D"></path></g></svg>
                            </button>
                        </div>
                        <!-- <div class="w-full h-[.1rem] bg-gray-200 mt-3"></div> -->

                        <div :class="[accordianState[index] ? 'h-fit' : 'hidden']" class="border-t p-10 px-5 text-lg text-gray-600 leading-relaxed">
                           {{ item.answers }}
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
                accordianState : {
                },
                faqs: [
                    {
                        question: "What is Bitcoin?",
                        answers: `Bitcoin is a digital currency that operates on a peer-to-peer network, which means it's not controlled by any central authority.
                            Users can send and receive Bitcoin directly, without intermediaries, making it a fast and low-cost way to transfer value. 
                            As one of the world'5res most popular crypto exchange platforms, ZiHuX makes it easy to buy and sell Bitcoin and hundreds of other cryptocurrencies.`
                    },
                    {
                        question: "Is ZiHuX a safe cryptocurrency exchange?",
                        answers: `ZiHuX is committed to providing a safe and trustworthy trading platform and boasts one of the most sophisticated security technologies and maintenance teams in the world, including a dedicated security team that constantly works to keep your assets and account secure alongside independently-verified Proof of Reserves that verifies all user assets are backed on a 1:1 basis.`
                    },
                    {
                        question: "Can I start trading with just $1?",
                        answers: `ZiHuX offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on ZiHuX without worrying about entry costs.`
                    },
                    {
                        question: "Is there an exchange limit between fiat and crypto?",
                        answers: `ZiHuX offers a variety of trading and investment options that allow you to buy and sell crypto with as little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading, you can try out different strategies and build your skills on ZiHuX without worrying about entry costs.With ZiHuX, you can exchange between fiat and cryptocurrencies without restrictions, making trading your assets easier than ever. With support for over 50 fiat currencies through P2P markets and credit/debit card channels, ZiHuX offers a seamless exchange experience for all users.`
                    }
                ]
            }
        },
        methods: {
            accordian(index) {
                this.accordianState[index]  =  !this.accordianState[index];
            }
        }
    }
</script>