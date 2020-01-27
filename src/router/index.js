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
import MeetingAdit from '@/components/MeetingAdit'
import MeetingList from '@/components/MeetingList'
import MeetingError from '@/components/MeetingError'
import MeetingWait from '@/components/MeetingWait'
import MeetingWaitPop2 from '@/components/MeetingWaitPop2'
import MeetingCancel from '@/components/MeetingCancel'
import MeetingCancel2 from '@/components/MeetingCancel2'
import MeetingDetail from '@/components/MeetingDetail'
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
    path: '/MeetingAdit',
    name: 'MeetingAdit',
    component: MeetingAdit
  },
  {
    path: '/MeetingApplyStep2',
    name: 'MeetingApplyStep2',
    component: MeetingApplyStep2
  },
  {
    path: '/MeetingList',
    name: 'MeetingList',
    component: MeetingList
  },
  {
    path: '/MeetingError',
    name: 'MeetingError',
    component: MeetingError
  },
  {
    path: '/MeetingApplyPop',
    name: 'MeetingApplyPop',
    component: MeetingApplyPop
  },
  {
    path: '/MeetingCancel',
    name: 'MeetingCancel',
    component: MeetingCancel
  },
  {
    path: '/MeetingCancel2',
    name: 'MeetingCancel2',
    component: MeetingCancel2
  },
  {
    path: '/MeetingDetail',
    name: 'MeetingDetail',
    component: MeetingDetail
  },
  {
    path: '/MeetingWaitpop2',
    name: 'MeetingWaitpop2',
    component: MeetingWaitPop2
  },
  {
    path: '/MeetingWait',
    name: 'MeetingWait',
    component: MeetingWait
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
