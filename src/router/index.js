import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import login from '@/pages/login/index';
import home from '@/pages/home/index';
import index1 from '@/pages/home/index1';
import index2 from '@/pages/home/index2';
import index3 from '@/pages/home/index3';
import index4 from '@/pages/home/index4';
import index5 from '@/pages/home/index5';
import index6 from '@/pages/home/index6';
import index7 from '@/pages/home/index7';
import Cookies from 'js-cookie';

Vue.use(Router);


const router =new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index1',
      name: 'index1',
      component: index1
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index2',
      name: 'index2',
      component: index2
    },
    {
      path: '/index3',
      name: 'index3',
      component: index3
    },
    {
      path: '/index4',
      name: 'index4',
      component: index4
    },
    {
      path: '/index5',
      name: 'index5',
      component: index5
    },
    {
      path: '/index6',
      name: 'index6',
      component: index6
    },
    {
      path: '/index7',
      name: 'index7',
      component: index7
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/pages/home/success')
    }
  ]
})

router.beforeEach((to, from, next) => {
  var name = Cookies.get('userId');
  if(!name){
    if(to.path !== '/login'){
      next({
        path: '/login'
      });
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router;