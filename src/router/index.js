import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import FirstStep from '@/views/FirstStep'
import AgreeStep from '@/views/AgreeStep'
import Ask from '@/views/Ask2'
import Ask2 from '@/views/Ask'
import AdditionalInfor from '@/views/AdditionalInfor'

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
    path: '/ask2',
    name: 'ask2',
    component: Ask2
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
