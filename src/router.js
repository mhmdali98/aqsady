import Home from './components/home.vue'

export const routes =[
    {path:'/', component: Home },
    { path: '*', redirect: '/' }

];