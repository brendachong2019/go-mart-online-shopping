// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/item",
        name: "Item",
        component: () => import("../views/Item.vue"),
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../components/Cart.vue"),
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/hello",
        name: "Hello",
        component: () => import("../views/Hello.vue"),
      },
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
