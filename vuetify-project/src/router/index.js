// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    component: () =>
        import ('@/layouts/default/Default.vue'),
    meta: { title: 'Validacion Pinia' }

}, ]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    next();
});

export default router