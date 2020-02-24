// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.css';
import less from 'less'

import App from './App';

Vue.use(ElementUI);
Vue.use(less);

Object.keys(ElementUI).forEach(v => {
  Vue.prototype[`$${v}`] = ElementUI[v];
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
