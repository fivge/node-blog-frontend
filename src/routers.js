import Home from './views/home.vue'
import Users from './views/users'

const routers = [{
        path: '/',
        component: Home,
        children: [{
            path: '/',
            component: Users
        }]
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '/',
                component: Users
            },
            {
                // 动态路径参数 以冒号开头
                path: 'users/:name',
                component: Users
            }
        ]
    }
]

export default routers