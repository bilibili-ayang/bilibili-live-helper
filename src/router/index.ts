import { createRouter, createWebHistory } from "vue-router";
import BarrageHelper from "@/views/barrage-helper/index.vue";

export const routes = [
  {
    path: "/",
    name: "barrage",
    component: BarrageHelper,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/helper-settings/index.vue"),
  },
  {
    path: "/fans",
    name: "fans",
    component: () => import("@/views/fans-helper/index.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: () => import("@/views/music-helper/index.vue"),
  },
  {
    path: "/prompt",
    name: "prompt",
    component: () => import("@/views/prompt-helper/index.vue"),
  },
  {
    path: "/clock",
    name: "clock",
    component: () => import("@/views/clock-helper/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
