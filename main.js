/**
 * Created by Administrator on 2017/4/7 0007.
 */
import App from './components/app.vue'

import List from './components/sender/list.vue'
import Detail from './components/sender/detail.vue'
Vue.use(VueRouter);

const routes = [

    { path: '/', component: List },
    { path: '/detail/:id', component: Detail }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
        router,
        render:h=>h(App)
}).$mount('#app')

