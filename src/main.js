/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: false
});

router.map(Routers);

router.beforeEach((transition) => {
    window.scrollTo(0, 0);
    //console.log(transition.to.path);
    transition.next();
});

router.afterEach(() => {
});

router.redirect({
    '*': "/index"
});

router.start(App, 'app');