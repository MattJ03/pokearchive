import { createRouter, createWebHistory } from 'vue-router';
import Home from "../screens/Home.vue";

const routes = [
    { path: '/home', component: Home, name: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
