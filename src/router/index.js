import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Hot from '@/components/Hot';
import News from '@/components/News';
import Home from '@/components/Home';
import Sea from '@/components/Sea';
import MusicNews from '@/components/MusicNews';
import SportNews from '@/components/SportNews';
import Newsdetails from '@/components/Newsdetails';
Vue.use (Router);
const routes = [
  // {
  //   path: '',
  //   redirect: '/home',
  // },
  // {
  //   path: '/home',
  //   component: Home,
  // },
  // {
  //   path: '/hot',
  //   component: Hot,
  // },
  {
    path: '/sea',
    component: Sea,
  },
  // {
  //   path: '/news',
  //   component: News,
  // children: [
  //   {
  //     path: 'musicNews',
  //     component: MusicNews,
  //   },
  //   {
  //     path: 'sportNews',
  //     component: SportNews,
  //   },
  //   {
  //     path: '/',
  //     redirect: 'musicNews',
  //   },
  // ],
  // },
  // {
  //   path: '/news/:id',
  //   name: 'Newsdetails',
  //   component: Newsdetails,
  // },
];
export default new Router ({
  routes,
  mode: 'history',
});
