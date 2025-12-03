<template>
    <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="/assets/img/logo.webp" alt=""> -->
        <h1 class="sitename">{{ $t('rim') }}</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/" :class="{ active: $route.path == '/' }">{{ $t('home') }}</router-link></li>
          <li><router-link to="/about" :class="{ active: $route.path == '/about'}">{{ $t('about') }}</router-link></li>
          
          <li class="dropdown"><a href="#"><span>{{ $t('informationOfFamily') }}</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><router-link to ="/wife" :class="{ active: $route.path == '/services'}">Wife</router-link></li>
              <li class="dropdown"><a href="#"><span>Child</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><router-link to ="/rimsobotomp">Rim Sobotomp</router-link></li>
                  <li><router-link to ="/rimsunnara">Rim Sunnara</router-link></li>
                  <li><router-link to ="/rimsovannbopta">Rim Sovannbopta</router-link></li>
          
                </ul>
              </li>
              
            </ul>
          </li>
          <li><router-link to ="contact" :class="{ active: $route.path == '/contact'}">{{ $t('contactpage') }}</router-link></li>
        <!-- Language switcher buttons -->
                <button 
  @click="switchLanguage" 
  class="flex items-center justify-center w-14 h-14 text-3xl rounded-full bg-transparent hover:bg-opacity-10 transition-all duration-300 ease-in-out border-2 relative overflow-hidden group"
  :class="$i18n.locale === 'en' ? 'border-blue-500 hover:bg-blue-500' : 'border-red-500 hover:bg-red-500'"
>
  {{ $i18n.locale === 'en' ? '🇰🇭' : '🇺🇸' }}
  <!-- Glow effect -->
  <span class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        :class="$i18n.locale === 'en' ? 'from-blue-400 to-blue-600' : 'from-red-400 to-red-600'">
  </span>
</button>
                <!-- <button @click="switchLanguage" class="flex text-2xl">
                  {{ $i18n.locale === 'en' ? '🇰🇭' : '🇺🇸' }}
                </button> -->
                <!-- End Language switcher buttons -->

        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <!-- <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div> -->

    </div>
  </header>
</template>

<script>
export default{
        methods: {
            switchLanguage(){
                const locale = this.$i18n.locale;
                if(locale === 'en') {
                    this.$i18n.locale = 'kh';
                }else{
                    this.$i18n.locale = 'en';
                }
            },
        },
 
    }

</script>