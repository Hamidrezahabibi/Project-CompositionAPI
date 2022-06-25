import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Template from '../views/users/Template.vue';
import Index from '../views/users/Index.vue';
import Show from '../views/users/Show.vue';
import TemplatePosts from '../views/posts/TemplatePosts.vue'
import ShowPosts from '../views/posts/ShowPosts.vue'
import IndexPosts from '../views/posts/IndexPosts.vue'
import CreatePosts from '../views/posts/CreatePosts.vue'
import EditPosts from '../views/posts/EditPosts.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/users',
    name: 'users',
    component: Template , children: [
    {
      path: '',
      name: 'users',
      component: Index
    },
    {
      path: ':id',
      name: 'userId',
      component: Show
    }
  ]},

  {
    path: '/posts',
    name: 'posts',
    component: TemplatePosts , children: [
    {
      path: '',
      name: 'posts',
      component: IndexPosts
    },
    {
      path: ':id',
      name: 'postId',
      component: ShowPosts
    }
  ]},
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePosts
  },
  {
    path: '/posts/edit/:id',
    name: 'editPost',
    component: EditPosts
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
