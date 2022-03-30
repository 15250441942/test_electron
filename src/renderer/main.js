import Vue from 'vue';
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import ViewUI from 'view-design';

// import 'view-design/dist/styles/iview.css';
// import * as VueWindow from '@hscmap/vue-window';

import * as VueWindow from '@hscmap/vue-window';
import App from './App';
import router from './router';
import store from './store';
// import service from './service';

Vue.use(VueWindow);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(ViewUI);

/* eslint-disable no-new */
new Vue({
  components: {
    App,
  },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
