import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("../views/LoginView.vue"),
    // },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/AdminDashboardView.vue"),
    },
    // {
    //   path: "/mobil/:carId",
    //   name: "detailcar",
    //   component: () => import("../views/CarView.vue"),
    // },
  ],
});

export default router;
