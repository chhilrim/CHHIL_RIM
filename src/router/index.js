import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
// import ResumePage from '@/views/ResumePage.vue' 
// import PortfolioPage from '@/views/PortfolioPage.vue'
// import ServicesPage from '@/views/ServicesPage.vue'

// import Experience from '@/views/Experience.vue'
// import Projects from '@/views/ProjectPage.vue'
// import CurrentJob from '@/views/CurrentJobPage.vue' 
import ContactPage from '@/views/ContactPage.vue'
import NotFound from '@/components/NotFoundPage.vue'

import WifePage from '@/views/WifePage.vue'
import RimSobotomp from '@/views/RimSobotomp.vue'
import RimSunnara from '@/views/RimSunnara.vue'
import RimSovannbopta from '@/views/RimSovannbopta.vue'

const routes = [
    {
        path: '/',name: 'Home',component: Home
    },
    {
        path: '/about',name: 'About',component: About
    },
    // {
    //     path: '/resume',name: 'ResumePage',component: ResumePage
    // },
    //  {
    //      path: '/portfolio',name: 'PortfolioPage',component: PortfolioPage
    //  },
    //   {
    //      path: '/services',name: 'ServicesPage',component: ServicesPage
    //  },
     {
         path: '/wife',name: 'WifePage',component: WifePage
     },
    {
        path: '/rimsobotomp',name: 'RimSobotomp',component: RimSobotomp
    },
    {
        path: '/rimsunnara',name: 'RimSunnara',component: RimSunnara
    },
    {
        path: '/rimsovannbopta',name: 'RimSovannbopta',component: RimSovannbopta
    },
     {
         path: '/contact',name: 'ContactPage',component: ContactPage
     },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
