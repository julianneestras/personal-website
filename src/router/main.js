import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";
import PageNotFound from "../views/not-found/PageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  // Add routes for each section that will be scrolled to
  {
    path: "/about",
    component: Home,
    meta: {
      scrollTo: "about",
    },
  },
  {
    path: "/projects",
    component: Home,
    meta: {
      scrollTo: "projects",
    },
  },
  {
    path: "/contact",
    component: Home,
    meta: {
      scrollTo: "contact",
    },
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    // If the route has a scrollTo meta property, scroll to that element
    if (to.meta.scrollTo) {
      return new Promise((resolve) => {
        // Add a small delay to ensure DOM is updated
        setTimeout(() => {
          const element = document.getElementById(to.meta.scrollTo);
          if (element) {
            resolve({
              el: element,
              behavior: "smooth",
              top: 80, // Offset for fixed header
            });
          } else {
            // Fall back to top of page
            resolve({
              top: 0,
              behavior: "smooth",
            });
          }
        }, 100);
      });
    }
    // Default to top of page
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
