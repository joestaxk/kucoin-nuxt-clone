<script setup>
  import Cover from './components/cover.vue';
  import Header from './components/header.vue'
  import CryptoMarket from './components/cryptoMarket.vue'
  import DistributionSection from './components/distributionSection.vue'
</script>

<template>
  <!-- <ClientOnly> -->
    <Header />
    <Cover />
    <CryptoMarket />
    <DistributionSection/>
  <!-- </ClientOnly> -->
</template>