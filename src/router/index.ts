import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/movieList',
    name: 'movieList',
    component: () => import('@/views/MovieList.vue')
  },
  {
    path: '/comment/:id',
    name: 'comment',
    component: () => import('@/views/comment.vue'),
  },
  {
    path: '/movieDetail/:id',
    name: 'movieDetail',
    component: () => import('@/views/movieDetail.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
