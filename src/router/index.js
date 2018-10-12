import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Pie from '@/components/Pie';
import Height from '@/components/Height';
import Editor from '@/components/Editor';
import Notificat from '@/components/Notification';
import Viewer from '@/components/Viewer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/pie',
        name: 'pie',
        component: Pie
    },
    {
        path: '/height',
        name: 'height',
        component: Height
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor
    },
    {
        path: '/notificat',
        name: 'notificat',
        component: Notificat
    },
    {
        path: '/viewer',
        name: 'viewer',
        component: Viewer
    }
  ]
})
