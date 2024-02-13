import { createRouter, createWebHistory } from 'vue-router';
import Page1 from './components/Page1.vue'; // Import Page1 component
import Page2 from './components/Page2.vue'; // Import Page2 component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
});

export default router;
