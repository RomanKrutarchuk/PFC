import { createRouter, createWebHistory } from "vue-router";
import GetStartComponent from "@/components/GetStartComponent";
import CreateFormComponent from "@/components/CreateFormComponent.vue";
import AuthFormComponent from "@/components/AuthFormComponent.vue";
import CommentsComponent from "@/components/CommentsComponent.vue";

const routes = [
  {
    path: "/",
    name: "GetStartComponent",
    component: GetStartComponent,
  },
  {
    path: "/create",
    name: "CreateFormComponent",
    component: CreateFormComponent,
  },
  {
    path: "/auth",
    name: "AuthFormComponent",
    component: AuthFormComponent,
  },
  {
    path: "/comments",
    name: "CommentsComponent",
    component: CommentsComponent,
  },
  // path: '/about',
  // name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
