import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/html',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/css',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/js',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/jquery',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/ajax',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/algorithm',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/es6',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/react',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/vue',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/webpack',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },
                {
                    path: '/node',
                    component: resolve => require(['../components/page/Title.vue'], resolve)
                },


            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
