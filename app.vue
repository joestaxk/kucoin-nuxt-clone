<script setup>
  import Cover from './components/cover.vue';
  import Header from './components/header.vue'
  import CryptoMarket from './components/cryptoMarket.vue'
  import ExploreProducts from './components/exploreProducts.vue';
  import DistributionSection from './components/distributionSection.vue'
  import Faq from './components/faq.vue'
  import Banner from './components/banner.vue'
  import Footer from './components/footer.vue'

</script>

<template>
    <Header />
    <Cover />
    <CryptoMarket />
    <ExploreProducts />
    <DistributionSection/>
    <Faq />
    <Banner />
    <Footer />
    <!-- <div class="h-[100vh] w-full bg-kcoin text-white flex justify-center items-center">
      <h2 class="text-3xl font-bold bg-slate-400 p-2 rounded">Maintenance Mode 🛠️</h2>
    </div> -->
</template>