import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import AlarmList from '@/components/AlarmList'
import AskDetail from '@/components/AskDetail'
import AskPageHistory from '@/components/AskPageHistory'
import EmailEdit from '@/components/EmailEdit'
import InputInformation from '@/components/InputInformation'
import MainMenu from '@/components/MainMenu'
import MeetingApply from '@/components/MeetingApply'
import MeetingApplyStep2 from '@/components/MeetingApplyStep2'
import MeetingApplyPop from '@/components/MeetingApplyPop'
import MemberType from '@/components/MemberType'
import Mypage from '@/components/Mypage'
import Slider from '@/components/Slider'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/AlarmList',
    name: 'AlarmList',
    component: AlarmList
  },
  {
    path: '/AskDetail',
    name: 'AskDetail',
    component: AskDetail
  },
  {
    path: '/AskPageHistory',
    name: 'AskPageHistory',
    component: AskPageHistory
  },
  {
    path: '/EmailEdit',
    name: 'EmailEdit',
    component: EmailEdit
  },
  {
    path: '/InputInformation',
    name: 'InputInformation',
    component: InputInformation
  },
  {
    path: '/MainMenu',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/MeetingApply',
    name: 'MeetingApply',
    component: MeetingApply
  },
  {
    path: '/MeetingApplyStep2',
    name: 'MeetingApplyStep2',
    component: MeetingApplyStep2
  },
  {
    path: '/MeetingApplyPop',
    name: 'MeetingApplyPop',
    component: MeetingApplyPop
  },
  {
    path: '/MemberType',
    name: 'MemberType',
    component: MemberType
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: Slider
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
