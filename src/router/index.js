import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: 'project-v2/',
            redirect: 'project-v2/',
            name: '首页',
            hidden: true,
            component: () => import('@/components/Login')
        },
        {
            path: 'project-v2/',
            name: 'Login',
            hidden: true,
            component: () => import('@/components/Login')
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            component: () => import('@/components/NotFound')
        },
        // {
        //     path: '/home',
        //     // component: Home
        //     // component: () => import('@/components/Home')
        //     component: resolve => require(['@/components/Home'], resolve)
        // },
        {
            path: 'project-v2/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            redirect: '/home/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'project-v2/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/students/StudentList')
                },
                {
                    path: 'project-v2/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoList')
                },
                {
                    path: 'project-v2/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoLists')
                },
                {
                    path: 'project-v2/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/students/WorkList')
                },
                {
                    path: 'project-v2/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () => import('@/components/students/WorkMent')
                }
            ]
        },
        {
            path: 'project-v2/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'project-v2/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DataView')
                },
                {
                    path: 'project-v2/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView')
                },
                {
                    path: 'project-v2/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: 'project-v2/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScoreMap')
                }
            ]
        },
        {
            path: 'project-v2/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: 'project-v2/users/user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: () => import('@/components/users/User')
                }
            ]
        }
    ],
    mode: 'history'
})