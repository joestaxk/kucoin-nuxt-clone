<template>
    <section class="w-full min-h-[70vh] flex flex-col items-center mt-[5rem]">
        <div class="xl:min-w-[1300px] min-w-full xl:p-0 p-5">
            <div class="w-full flex flex-col items-center">
                <h1 class="xl:text-[2.3rem] lg:text-[2rem] text-[1.6rem] text-center font-bold">ZiHuX Always Puts User Asset
                    Safety First</h1>
                <a href="/signup"
                    class="text-xl  mt-5 text-center bg-black  p-3 px-7 rounded-3xl font-semibold leading-6 text-gray-100">
                    Learn More &rarr;
                </a>
            </div>

            <div class="flex md:justify-around flex-wrap gap-5 mt-[4rem]">
                <div v-for="(item, i) in safetySec" :key="i" class="md:w-[300px] w-full flex flex-col items-center">
                    <div class="">
                        <img :src="item.src" alt="" />
                    </div>
                    <h2 class="lg:text-xl text-md font-semibold text-center mb-5">{{ item.value }}</h2>
                    <p class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-[16px] text-sm">{{ item.msg }}</p>
                </div>
            </div>
        </div>

        <div class="min-w-full flex flex-wrap lg:flex-row flex-col-reverse xl:p-0 p-5 md:mt-[3rem] mt-[1rem]">
            <div class="lg:w-1/2 w-[100%]">
                <img src="/phone.svg" class="w-[80%]" alt="" />
            </div>

            <div class="mt-[4rem] lg:pl-0 md:pl-[4rem] ">
                <h1 class="lg:text-4xl text-2xl font-semibold mb-5">Trade Anytime, Anywhere</h1>
                <p class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-[18px] text-md">The ZiHuX app and website allow
                    you to trade crypto with ease.</p>

                <div class="">
                    <div class="flex items-center mb-[2.4rem] mt-[3rem] gap-2">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#1D1D1D" />
                            <path d="M14 6.5L10.75 12L9.9375 13.375L9.53125 14.0625" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 17.5L7.90625 16.8125" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M6 14.5H11.5" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M15 14.5H18" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M9.5 6.5L11.25 9.25L11.6875 9.9375" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 17.5L14.75 14.75L13.875 13.375L13.4375 12.6875" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 class="lg:text-xl text-md font-semibold">App Store</h3>
                    </div>
                    <!-- Add other app store links here -->
                    <div class="flex items-center mb-[2.4rem] gap-2">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3.196 20.8223L11.939 12.0953L3.196 3.35228C2.981 3.69928 2.832 4.26228 2.832 5.07428V19.1003C2.832 19.9113 2.981 20.4743 3.196 20.8223ZM15.63 15.7873L12.766 12.9073L4.256 21.4343H4.339C5.067 21.4343 5.696 21.1693 6.706 20.6233L15.631 15.7873H15.63ZM16.704 8.96528L13.591 12.0953L16.704 15.2083L18.592 14.1813C19.287 13.8013 20.347 13.1053 20.347 12.0953C20.347 11.0683 19.287 10.3723 18.592 9.99128L16.704 8.96528ZM4.256 2.73828L12.766 11.2663L15.631 8.38628L6.706 3.55028C5.696 3.00328 5.067 2.73828 4.339 2.73828H4.256Z"
                                fill="black" />
                        </svg>
                        <h3 class="lg:text-xl text-md font-semibold">Google Play</h3>
                    </div>

                    <div class="flex items-center mb-[2.4rem] gap-2">
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9506 18H2.04932C2.55104 12.9467 6.8146 9 12 9C17.1853 9 21.4489 12.9467 21.9506 18Z"
                                fill="#333333" stroke="#333333" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M7 10L5 6.5" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M16.5 10L18.5 6.5" stroke="#333333" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path
                                d="M7.5 15.5C8.05228 15.5 8.5 15.0523 8.5 14.5C8.5 13.9477 8.05228 13.5 7.5 13.5C6.94772 13.5 6.5 13.9477 6.5 14.5C6.5 15.0523 6.94772 15.5 7.5 15.5Z"
                                fill="white" />
                            <path
                                d="M16.5 15.5C17.0523 15.5 17.5 15.0523 17.5 14.5C17.5 13.9477 17.0523 13.5 16.5 13.5C15.9477 13.5 15.5 13.9477 15.5 14.5C15.5 15.0523 15.9477 15.5 16.5 15.5Z"
                                fill="white" />
                        </svg>
                        <h3 class="lg:text-xl text-md font-semibold">Android APK</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- Kucoin by your side -->
        <div class="flex justify-center p-4">
            <div class="xl:w-[1300px] w-full">
                <h1 class="lg:text-3xl text-2xl font-bold mb-[2rem]">ZiHuX by Your Side</h1>
                <div class="flex md:flex-nowrap flex-wrap gap-5">
                    <div class="flex flex-col md:w-1/2 w-full h-[300px] md:p-8 p-4 rounded-2xl bg-gray-100">
                        <div class="grow">
                            <div class="">
                                <h2 class="text-2xl font-semibold mb-2">24/7 Customer Service</h2>
                                <p class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-[15px] text-sm">Contact
                                    ZiHuX customer support with your questions at any time.</p>
                            </div>
                        </div>

                        <div class="">
                            <a href="#" class="text-kcoin sm:text-[16px] text-md font-bold">
                                ZiHuX Help Center &rarr;
                            </a>
                        </div>
                    </div>


                    <div class="flex flex-col divide-x-4 bg-[#7289da34] rounded-2xl md:w-1/2 h-[300px] md:p-8 p-4">
                        <div class="grow">
                            <div class="">
                                <h2 class="text-2xl font-semibold mb-2">Join Our Community</h2>
                                <p class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-[15px] text-sm">The KuCoin
                                    Global Community is home to millions of users from 200+ countries, with support for 20+
                                    languages.</p>
                            </div>
                        </div>

                        <div class="">
                            <div class="text-[rgba(29,29,29,0.4)] leading-relaxed lg:text-[16px] text-sm">
                                <p>English Community</p>
                            </div>

                            <div class="flex gap-2 items-center mb-[2rem]">

                                <a href="">
                                    <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>telegram@1.5x</title>
                                        <defs>
                                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                                <stop stopColor="#0AAEFF" offset="0%" />
                                                <stop stopColor="#0088CC" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-367.000000, -679.000000)">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-11" transform="translate(0.000000, 61.000000)">
                                                            <g id="Rectangle" transform="translate(0.000000, 6.000000)">
                                                                <rect x="0" y="0" width="44" height="44" />
                                                                <g id="Group-5" transform="translate(7.333333, 7.333333)">
                                                                    <circle id="Oval" fill="url(#linearGradient-1)"
                                                                        cx="14.6666667" cy="14.6666667" r="14.6666667" />
                                                                    <path
                                                                        d="M11.5570164,17.4598971 L17.3983333,21.7693621 C18.0628601,22.131502 18.5463169,21.9504321 18.7147119,21.1537243 L21.0921605,9.95092593 C21.3347942,8.97314815 20.7191564,8.53858025 20.0781687,8.8282922 L6.12491768,14.2115021 C5.17067901,14.5989918 5.18335388,15.1295268 5.95471195,15.3594856 L9.53989713,16.4821194 L17.8329012,11.2546296 C18.220391,11.0138066 18.5825309,11.1459877 18.2928189,11.4121605 L11.5570164,17.4598971 Z"
                                                                        id="Path" fill="#FFFFFF" fillRule="nonzero" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-368.000000, -792.000000)"
                                                fillRule="nonzero">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-18" transform="translate(0.000000, 173.000000)">
                                                            <g id="Rectangle" transform="translate(0.000000, 6.000000)">
                                                                <g id="编组" transform="translate(4.000000, 4.000000)">
                                                                    <g id="twi" transform="translate(4.000000, 4.000000)">
                                                                        <path
                                                                            d="M14,0 C6.2804,0 0,6.2804 0,14 C0,21.7186667 6.2804,28 14,28 C21.7186667,28 28,21.7186667 28,14 C28,6.2804 21.7205333,0 14,0 Z"
                                                                            id="Path" fill="#03A9F4" />
                                                                        <path
                                                                            d="M20.1876461,10.8810945 C20.1931931,11.0166182 20.1968911,11.1521418 20.1968911,11.2885751 C20.1968911,15.4388736 16.9870439,20.2222222 11.1146506,20.2222222 C9.31188504,20.2222222 7.63392633,19.703776 6.22222222,18.8124123 C7.91058759,19.0131577 9.61080392,18.5452356 10.9482415,17.511749 C9.58238811,17.4867572 8.38379071,16.6101958 7.9658201,15.3306365 C8.44411633,15.4205913 8.93692778,15.4025533 9.40710806,15.2778824 C7.91741601,14.9821416 6.84615862,13.6941976 6.84625645,12.1990394 C6.84625645,12.1853961 6.84625645,12.1717528 6.84810545,12.159019 C7.2779957,12.3936841 7.76982712,12.5355747 8.29309139,12.5519467 C7.40494,11.9692902 6.87194834,10.9881294 6.87306682,9.9378862 C6.87306682,9.36122847 7.03023101,8.82186247 7.30480607,8.35798952 C8.9254312,10.3204072 11.3167245,11.5135929 13.8835136,11.6405728 C13.5502599,10.2547981 14.206682,8.82189319 15.4827021,8.149701 C16.7587223,7.4775088 18.3347771,7.73437155 19.3223186,8.77547517 C20.037783,8.63746777 20.7238593,8.37965522 21.350661,8.01326827 C21.1117192,8.74076033 20.6123517,9.35811435 19.9454284,9.7505179 C20.5779421,9.67728555 21.1956465,9.51079058 21.7777778,9.25662965 C21.3509844,9.88725272 20.8123628,10.4371959 20.1876461,10.880185 L20.1876461,10.8810945 Z"
                                                                            id="Path" fill="#FFFFFF" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-668.000000, -680.000000)">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-20" transform="translate(300.000000, 61.000000)">
                                                            <g id="Rectangle" transform="translate(0.000000, 6.000000)">
                                                                <rect x="0" y="0" width="44" height="44" />
                                                                <g id="Group-5" transform="translate(8.000000, 8.000000)"
                                                                    fillRule="nonzero">
                                                                    <circle id="Oval" fill="#FF4500" cx="14" cy="14"
                                                                        r="14" />
                                                                    <g id="reddit"
                                                                        transform="translate(3.888889, 5.444444)">
                                                                        <path
                                                                            d="M6.42995398,9.06873806 L6.42995398,9.07641806 L7.08544116,9.07641806 L6.42995398,9.06873806 Z M12.9827198,9.06873806 L12.9827198,9.07641806 L13.6376805,9.07641806 L12.9827198,9.06873806 Z"
                                                                            id="Shape" fill="#FF4500" />
                                                                        <path
                                                                            d="M20.2222222,7.53863894 C20.2208216,6.15153077 19.0948931,5.02740447 17.705561,5.02601333 C17.1504614,5.02601333 16.6236728,5.2067124 16.1929398,5.5347973 C14.7885073,4.56063751 12.9487918,3.98017961 10.9917875,3.83380326 L12.0478924,1.36105259 L15.119646,2.07728717 C15.2177237,3.02620966 16.0129621,3.76970052 16.9881782,3.76970052 C18.030288,3.76858775 18.8748069,2.92542065 18.8759214,1.88497894 C18.8748069,0.844537225 18.030288,0.00137012867 16.9881782,0.000257355829 C16.351727,0.000853903055 15.7586151,0.322281006 15.4113514,0.854792342 L11.8214037,0.016913974 C11.5232953,-0.0534312902 11.2177853,0.100890982 11.0979541,0.382350082 L9.63791061,3.79948054 C7.52468973,3.87266871 5.51156879,4.46675475 3.9913642,5.50198881 C3.56381882,5.18919454 3.04669293,5.02228705 2.51665958,5.02601333 C1.12732754,5.02740447 0.00139899617,6.15153077 0,7.53863894 C-0.00190778944,8.44013717 0.484688608,9.27216724 1.27198259,9.71358948 C1.26187149,9.82412885 1.2583326,9.93719196 1.2583326,10.0517693 C1.2583326,13.5153364 5.20975231,16.3333333 10.067127,16.3333333 C14.922985,16.3333333 18.8759214,13.5153364 18.8759214,10.0512646 C18.8759214,9.95334383 18.871877,9.8564326 18.8658103,9.76002611 C19.7003514,9.33337803 20.2244666,8.47522836 20.2222222,7.53914369 L20.2222222,7.53863894 Z M17.1114236,0.777777778 C17.5389045,0.777777778 17.8888889,1.12588724 17.8888889,1.55524307 C17.8888889,1.9845989 17.5389045,2.33333333 17.1114236,2.33333333 C16.6819816,2.33264512 16.3340215,1.98468507 16.3333333,1.55524307 C16.3333333,1.12588724 16.6833177,0.777777778 17.1114236,0.777777778 L17.1114236,0.777777778 Z M5.44444444,9.72245654 C5.44521927,9.07831607 5.96730998,8.55633023 6.61157984,8.55555556 C7.25548357,8.55684626 7.77700422,9.0786813 7.77777778,9.72245654 C7.77700295,10.3663382 7.2551221,10.8881142 6.61111111,10.8888889 C5.96691734,10.8881137 5.44496099,10.3660526 5.44444444,9.7219879 L5.44444444,9.72245654 Z M12.9647107,13.7221076 C11.2616629,15.1296678 8.95860389,15.1296678 7.25555611,13.7221076 C7.07671111,13.5743561 6.98054998,13.3289856 7.00329568,13.0784247 C7.02604138,12.8278638 7.16423829,12.6101787 7.36582899,12.5073693 C7.56741968,12.4045599 7.80177773,12.4322453 7.98062271,12.5799968 C9.25076693,13.631828 10.9699965,13.631828 12.2401407,12.5799968 C12.4189388,12.4310915 12.6539127,12.4027012 12.8560877,12.505576 C13.0582627,12.6084508 13.196732,12.8268642 13.2190631,13.0781121 C13.2413943,13.3293601 13.1441734,13.575034 12.9642141,13.7221076 L12.9647107,13.7221076 Z M13.6111111,10.8888889 C12.961499,10.8709874 12.4444444,10.3539328 12.4444444,9.72222222 C12.4444444,9.09051167 12.961499,8.57345707 13.6111111,8.55555556 C14.2607232,8.57345707 14.7777778,9.09051167 14.7777778,9.72222222 C14.7777778,10.3539328 14.2607232,10.8709874 13.6111111,10.8888889 Z"
                                                                            id="Shape" fill="#FFFFFF" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>


                                <a href="">
                                    <svg width="28px" height="19px" viewBox="0 0 28 19" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-668.000000, -796.000000)">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-23" transform="translate(300.000000, 173.000000)">
                                                            <g id="编组" transform="translate(0.000000, 6.000000)">
                                                                <rect id="Rectangle" x="4" y="4" width="36" height="36" />
                                                                <g id="Group" transform="translate(8.000000, 12.000000)"
                                                                    fillRule="nonzero">
                                                                    <path
                                                                        d="M26.4709938,2.92221279 C26.1524539,1.78802096 25.2716214,0.899064791 24.1416816,0.571418007 L24.1180166,0.565492345 C22.0109863,-3.55271368e-15 13.5296191,-3.55271368e-15 13.5296191,-3.55271368e-15 C13.5296191,-3.55271368e-15 5.07022643,-0.0109899179 2.94122154,0.565492345 C1.80883116,0.884539001 0.921286935,1.76677278 0.594160557,2.89851014 L0.588244307,2.92221279 C0.213830186,4.85313209 -3.62376795e-13,7.07271578 -3.62376795e-13,9.34309086 L-3.62376795e-13,9.48107413 L-3.62376795e-13,9.47430195 L-3.62376795e-13,9.58096386 C-3.62376795e-13,11.8513389 0.213830186,14.0709226 0.62289663,16.221938 L0.588244307,16.0018419 C0.906784216,17.1360338 1.78761673,18.0249899 2.91755653,18.3526367 L2.94122154,18.3585624 C5.04656143,18.9248864 13.5296191,18.9248864 13.5296191,18.9248864 C13.5296191,18.9248864 21.9881665,18.9248864 24.1180166,18.3585624 C25.250407,18.0395157 26.1379512,17.1572819 26.4650776,16.0255446 L26.4709938,16.0018419 C26.8301947,14.1115557 27.0355731,11.9359913 27.0355731,9.71302147 L27.0347279,9.4616041 L27.0347279,9.47430195 L27.0355731,9.21187977 C27.0355731,6.98890999 26.8301947,4.8133455 26.4371867,2.70465634 L26.4709938,2.92305931 L26.4709938,2.92221279 Z"
                                                                        id="Path" fill="#FF0000" />
                                                                    <polygon id="Path" fill="#FFFFFF"
                                                                        points="10.822512 13.5274548 10.822512 5.40845127 17.8814437 9.47430195" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>


                                <a href="">
                                    <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-969.000000, -681.000000)">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-24" transform="translate(600.000000, 61.000000)">
                                                            <g id="Rectangle" transform="translate(0.000000, 6.000000)">
                                                                <rect x="0" y="0" width="44" height="44" />
                                                                <rect fill="#FFFFFF" x="11" y="11" width="22" height="22" />
                                                                <g id="linkedin-(1)"
                                                                    transform="translate(9.000000, 9.000000)" fill="#008ED9"
                                                                    fillRule="nonzero">
                                                                    <path
                                                                        d="M22.1511875,22.1567549 L18.30075,22.1567549 L18.30075,16.1237539 C18.30075,14.6847714 18.2715,12.8338386 16.2946875,12.8338386 C14.287,12.8338386 13.9806875,14.399575 13.9806875,16.0181256 L13.9806875,22.1575674 L10.13025,22.1575674 L10.13025,9.75111722 L13.82875,9.75111722 L13.82875,11.4419826 L13.8783125,11.4419826 C14.3950625,10.4669521 15.652,9.43748242 17.528875,9.43748242 C21.4296875,9.43748242 22.1511875,12.0050627 22.1511875,15.3469796 L22.1511875,22.1567549 L22.1511875,22.1567549 Z M5.78175,8.05293931 C5.18859357,8.05315521 4.61969298,7.81750179 4.20042045,7.39791134 C3.78114793,6.97832088 3.54591538,6.4092314 3.54656117,5.81605675 C3.54701131,4.58110958 4.54846632,3.58035092 5.7833749,3.58079954 C7.01828348,3.58124847 8.01901091,4.58273473 8.01856236,5.8176819 C8.0181135,7.05262907 7.01665858,8.05338782 5.78175,8.05293931 L5.78175,8.05293931 Z M7.71225,22.1567549 L3.85125,22.1567549 L3.85125,9.7503047 L7.71225,9.7503047 L7.71225,22.1567549 L7.71225,22.1567549 Z M24.0768125,0 L1.9183125,0 C0.858,0 0,0.838526204 0,1.87287103 L0,24.127129 C0,25.1630988 0.858,26 1.9183125,26 L24.0735625,26 C25.1330625,26 26,25.1622863 26,24.127129 L26,1.87287103 C26,0.838526204 25.1330625,0 24.0735625,0 L24.0768125,0 Z"
                                                                        id="Shape" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>

                                <a href="">
                                    <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="OTC加广告位" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="首页备份-2-copy" transform="translate(-969.000000, -737.000000)">
                                                <g id="英国" transform="translate(0.000000, 559.000000)">
                                                    <g id="编组-7" transform="translate(360.000000, 46.000000)">
                                                        <g id="Group-Copy-28" transform="translate(600.000000, 117.000000)">
                                                            <g id="Group-8" transform="translate(0.000000, 6.000000)">
                                                                <rect id="Rectangle" x="0" y="0" width="44" height="44" />
                                                                <path
                                                                    d="M30.125,9 C31.4678819,9 32.6161024,9.47677951 33.5696615,10.4303385 C34.5232205,11.3838976 35,12.532118 35,13.875 L35,30.125 C35,31.4678819 34.5232205,32.6161024 33.5696615,33.5696615 C32.6161024,34.5232205 31.467882,35 30.125,35 L26.9427083,35 L26.9427083,24.9283854 L30.3111979,24.9283854 L30.8190104,21.0013021 L26.9427083,21.0013021 L26.9427083,18.4960938 C26.9427083,17.8641493 27.0753038,17.390191 27.3404948,17.0742188 C27.6056857,16.7582465 28.1219618,16.6002604 28.8893229,16.6002604 L30.9544271,16.5833333 L30.9544271,13.0794271 C30.2434896,12.9778646 29.2391493,12.9270833 27.9414062,12.9270833 C26.406684,12.9270833 25.1794705,13.3784722 24.2597656,14.28125 C23.3400608,15.1840278 22.8802083,16.4592014 22.8802083,18.1067708 L22.8802083,21.0013021 L19.4947917,21.0013021 L19.4947917,24.9283854 L22.8802083,24.9283854 L22.8802083,35 L13.875,35 C12.5321181,35 11.3838976,34.5232205 10.4303385,33.5696615 C9.47677949,32.6161024 9,31.467882 9,30.125 L9,13.875 C9,12.5321181 9.47677951,11.3838976 10.4303385,10.4303385 C11.3838976,9.47677949 12.532118,9 13.875,9 L30.125,9 Z"
                                                                    id="Path" fill="#1977F2" fillRule="nonzero" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        <a href="#" class="text-kcoin md:text-[16px] text-md font-bold">
                            View all 20+ languages &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></template>
  
<script>
export default {
    data() {
        return {
            safetySec: [
                { value: "Secure Asset Storage", src: "/k1.svg", msg: "Our industry-leading encryption and storage systems ensure that your assets are always safe and secure." },
                { value: "Strong Account Security", src: "/k2.svg", msg: "We adhere to the highest security standards and implement the strictest security practices to keep your account secure." },
                { value: "PoR — Asset Transparency", src: "/k3.svg", msg: "PoR (Proof of Reserves) is a widely used method to prove custody of assets on the blockchain, confirming that ZiHuX has the funds that cover all user assets on our books." }
            ]
        };
    }
};
</script>
  
<style scoped>/* Add your CSS styles here */</style>
  