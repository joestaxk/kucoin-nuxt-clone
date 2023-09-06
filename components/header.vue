<template>
    <header class="bg-white fixed top-0 left-0 w-full z-20">
      <nav class="mx-auto flex items-center justify-between  p-4 lg:px-6" aria-label="Global">
        <div class="flex md:flex-1 gap-4 items-center divide-x divide-gray-300 text-sm">
            <a href="#" class="-m-1.5">
                <span class="sr-only">Your Company</span>
                <div class=" overflow-hidden">
                  <img class="relative h-[50px] w-full -translate-x-5 sm:-translate-x-10 " src="/zihux_logo.svg" alt="" />
                </div>
            </a>

            <div class="pl-4 -translate-x-16">
                <PopoverGroup class="hidden lg:flex lg:gap-x-4">
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    Buy Crypto
                    <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>
        
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                    <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-[350px] max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div class="p-4">
                        <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-2 rounded-lg p-4 text-sm leading-3 hover:bg-gray-50">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div class="flex-auto">
                            <a :href="item.href" class="block font-semibold text-gray-900">
                                {{ item.name }}
                                <span class="absolute inset-0" />
                            </a>
                            <p class="mt-1 text-gray-600 text-xs">{{ item.description }}</p>
                            </div>
                        </div>
                        </div>
                        <!-- <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                            <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {{ item.name }}
                        </a>
                        </div> -->
                    </PopoverPanel>
                    </transition>
                </Popover>
        
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Market</a>
                <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a> -->
                </PopoverGroup>
            </div>
        </div>
        <div class="flex flex-1 justify-end md:gap-4 gap-2 items-center ">
          <div class="flex items-center gap-4">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-800 hiddn whitespace-nowrap sm:block">Log In </a>
            <a href="#" class="text-sm font-semibold leading-6  bg-[#0c0c0c] block rounded-full whitespace-nowrap px-4 py-1 text-white">Sign Up </a>
          </div>

          <div class="h-5 w-[.5px] bg-gray-300 "></div>
          <button  @click="mobileMenuOpen = true" class="group w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[#f6f6f6]">
            <svg class="group-hover:fill-kcoin transition-colors duration-150" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#1D1D1D" style="cursor: pointer;"><path d="M153.6 256a51.2 51.2 0 0151.2-51.2h614.4a51.2 51.2 0 110 102.4H204.8a51.2 51.2 0 01-51.2-51.2zm0 256a51.2 51.2 0 0151.2-51.2H512a51.2 51.2 0 110 102.4H204.8a51.2 51.2 0 01-51.2-51.2zm0 256a51.2 51.2 0 0151.2-51.2h614.4a51.2 51.2 0 110 102.4H204.8a51.2 51.2 0 01-51.2-51.2z"></path></svg>
          </button>
        </div>
      </nav>


      <!-- nav bar on mobile -->
      <Dialog as="div" class="transition-transform duration-300" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-30 bg-black opacity-25" />
        <DialogPanel class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-end">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-100" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XCircleIcon class="h-7 w-7 text-gray-500" aria-hidden="true" />
            </button>
          </div>

          <div class="flex justify-center gap-3 items-center mt-10">
            <button class="p-3 rounded-full w-1/2 border border-black font-bold">Log In</button>
            <button class="p-3 rounded-full w-1/2 border border-black bg-black text-white font-bold">Sign Up</button>
          </div>


          
          <div class="mt-6 flow-root lg:hidden">
            <div class="-my-6 border-b divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Buy Crypto
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton v-for="item in [...products]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Markets</a>
                <!-- <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a> -->
              </div>
              <!-- <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div> -->
            </div>
          </div>

            <!--  -->
          <div class="mt-8 w-full space-y-3">
            <div class="flex items-center justify-between hover:bg-gray-50 p-3 px-3 rounded-lg">
              <div class="flex gap-2 items-center">
                <GlobeAltIcon class="h-6 w-6 text-gray-600" />
                <span class="font-bold text-md text-gray-800">Language</span>
              </div>
                
              <span class="text-gray-500 text-sm">English</span>
            </div>

            <div class="flex items-center justify-between hover:bg-gray-50 p-3 px-3 rounded-lg">
              <div class="flex gap-2 items-center">
                <CurrencyDollarIcon class="h-6 w-6 text-gray-600" />
                <span class="font-bold text-md text-gray-800">Currecy</span>
              </div>
                
              <span class="text-gray-500 text-sm">USD($)</span>
            </div>
          </div>


        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    UsersIcon,
    ChartBarIcon,
    SquaresPlusIcon,
    XMarkIcon,
    GlobeAltIcon,
XCircleIcon,
CurrencyDollarIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Spot Trading', description: 'Trade crypto with comprehensive tools', href: '#', icon: ChartPieIcon },
    { name: 'P2P Trading', description: 'Bank transfer and 20+ Options', href: '#', icon: UsersIcon },
    { name: 'Future Trading', description: 'Browse your future trade', href: '#', icon: ChartBarIcon },
  ]
  const callsToAction = [
  
  
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>