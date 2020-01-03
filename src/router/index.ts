import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/tabs",
    name: "tabs",
    component: () => import("@/views/tabs.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue")
      },
      {
        path: "/movieList",
        name: "movieList",
        component: () => import("@/views/MovieList.vue"),
        meta: {
          name: "referrer",
          content: "never",
          title: "电影列表"
        }
      }
    ]
  },
  {
    path: "/uploadImg",
    name: "uploadImg",
    component: () => import("@/views/uploadImg.vue")
  },
  {
    path: "/comment/:id",
    name: "comment",
    component: () => import("@/views/comment.vue")
  },
  {
    path: "/movieDetail/:id",
    name: "movieDetail",
    component: () => import("@/views/movieDetail.vue")
  },
  {
    path: "/stepPage",
    name: "stepPage",
    component: () => import("@/views/StepPage.vue")
  },
  {
    path: "/dateTimePage",
    name: "dateTimePage",
    component: () => import("@/views/dateTimePage.vue"),
    meta: {
      title: "选择时间页面"
    }
  },
  {
    path: "/swiperPage",
    name: "swiperPage",
    component: () => import("@/views/swiperPage.vue")
  },
  {
    path: "/layoutPage",
    name: "layoutPage",
    component: () => import("@/views/layoutPage.vue")
  },
  {
    path: "/BankAddSpace",
    name: "BankAddSpace",
    component: () => import("@/views/BankAddSpace.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
