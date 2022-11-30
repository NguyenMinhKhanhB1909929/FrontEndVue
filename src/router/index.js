import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: () => import("../layout/LoginLayout.vue"),

    meta: {
      layout: "Auth",
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/auth/LoginForm.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/auth/RegisterForm.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("../layout/DashboardLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "myCourse",
        name: "myCourse",
        component: () => import("../views/MyCourseView.vue"),
      },

      {
        path: "add",
        name: "addCourse",
        component: () => import("../views/AddCourseView.vue"),
      },
      {
        path: "course",
        name: "courseManage",
        component: () => import("../views/CourseManagerView.vue"),
      },
      {
        path: "member",
        name: "memberManage",
        component: () => import("../views/MemberManagerView.vue"),
      },
      {
        path: "detailCourse/:id",
        name: "DetailCourse",
        component: () => import("../views/DetailsCourseView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
