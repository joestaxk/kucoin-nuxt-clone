<script setup>
  import Cover from './components/cover.vue';
  import Header from './components/header.vue'
  import CryptoMarket from './components/cryptoMarket.vue'
  import ExploreProducts from './components/exploreProducts.vue';
  import DistributionSection from './components/distributionSection.vue'
  import Faq from './components/faq.vue'
  import Banner from './components/banner.vue'

</script>

<template>
  <!-- <ClientOnly> -->
    <Header />
    <Cover />
    <CryptoMarket />
    <ExploreProducts />
    <DistributionSection/>
    <Faq />
    <Banner />
  <!-- </ClientOnly> -->
</template>