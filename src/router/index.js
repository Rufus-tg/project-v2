import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Home from '../components/Home'
import StudentList from '../components/students/StudentList'
import InfoList from '../components/students/InfoList'
import InfoLists from '../components/students/InfoLists'
import WorkList from '../components/students/WorkList'
import WorkMent from '../components/students/WorkMent'
import DataView from '../components/dataAnalysis/DataView'
import MapView from '../components/dataAnalysis/MapView'
import TravelMap from '../components/dataAnalysis/TravelMap'
import ScoreMap from '../components/dataAnalysis/ScoreMap'
import User from '../components/users/User'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: '首页',
            hidden: true,
            component: Login
        },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            component: Login
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            // component: () => import('../components/NotFound')
            component: NotFound
        },
        // {
        //     path: '/home',
        //     // component: Home
        //     // component: () => import('../components/Home')
        //     component: resolve => require(['../components/Home'], resolve)
        // },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            redirect: '/home/student',
            // component: () => import('../components/Home'),
            component: Home,
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: StudentList
                    // component: () => import('../components/students/StudentList')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: InfoList
                    // component: () => import('../components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: InfoLists
                    // component: () => import('../components/students/InfoLists')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: WorkList
                    // component: () => import('../components/students/WorkList')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: WorkMent
                    // component: () => import('../components/students/WorkMent')
                }
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: Home,
            // component: () => import('../components/Home'),
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: DataView
                    // component: () => import('../components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: MapView
                    // component: () => import('../components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: TravelMap
                    // component: () => import('../components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: ScoreMap
                    // component: () => import('../components/dataAnalysis/ScoreMap')
                }
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: Home,
            // component: () => import('../components/Home'),
            children: [
                {
                    path: '/users/user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: User
                    // component: () => import('../components/users/User')
                }
            ]
        }
    ],
    mode: 'history'
})