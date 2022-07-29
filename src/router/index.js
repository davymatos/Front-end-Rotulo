import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [{
    path: '/',
    name: 'index',
    component: () =>
        import ('../views/IndexView.vue')
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router