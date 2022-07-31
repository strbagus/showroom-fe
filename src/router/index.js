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
    {
      path: "/:carName-:carId",
      name: "detailcar",
      component: () => import("../views/CarsView.vue"),
    },
  ],
});

export default router;
