import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'; // Home component
import About from '@/components/About.vue'; // About component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
