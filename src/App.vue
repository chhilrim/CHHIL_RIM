<script>
  import HomePage from './views/HomePage.vue';
  import NavigationPage from './components/NavigationPage.vue';
  import FooterPage from './components/FooterPage.vue';

  export default{
    components:{
      HomePage,
      FooterPage,
      NavigationPage
    }
  }
</script>

<template>
  <NavigationPage/>
  <router-view/>

  <FooterPage/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hanuman:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

:root{
 font-family: "Roboto Mono", monospace ,"Hanuman", serif;
   font-optical-sizing: auto;
  font-style: normal;
}
body,h1,h2,h3,h4,h5,h6,p,ul,li,a{
   font-family: "Roboto Mono", monospace ,"Hanuman", serif !important;
   font-optical-sizing: auto;
  font-style: normal;
}
</style>
