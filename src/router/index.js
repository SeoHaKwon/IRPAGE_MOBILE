import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstStep from '../views/FirstStep.vue'
import AgreeStep from '../views/AgreeStep.vue'
import Ask from '../views/Ask.vue'
import AdditionalInfor from '../views/AdditionalInfor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/firstStep',
    name: 'firstStep',
    component: FirstStep
  },
  {
    path: '/agreeStep',
    name: 'agreeStep',
    component: AgreeStep
  },
  {
    path: '/ask',
    name: 'ask',
    component: Ask
  },
  {
    path: '/additionalInfor',
    name: 'additionalInfor',
    component: AdditionalInfor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
