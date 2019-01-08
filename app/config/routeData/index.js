/* Auth */
import AuthLayout from 'layouts/AuthLayout/Loadable';
import Login from 'pages/Auth/Login/Loadable';

/* Basic */
import BasicLayout from 'layouts/BasicLayout/Loadable';

/* Playground */
import Playground from 'layouts/Playground/Loadable';

/**
 * < route 对象属性 >
 * path: 路径 required
 * component: 组件
 * exact: 是否精确匹配 bool
 * redirect: 重定向路径 string
 * name: 名称 string
 * icon: 菜单图标 string
 * authority: 权限 string | array | func | Promise
 * routes: 下级路由 route
 * hideChildrenInMenu: 是否在菜单中显示下级路由 bool
 * hide: 是否在菜单中显示 bool
 */
export default [
  // Auth
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        exact: true,
      },
      {
        path: '/auth',
        redirect: '/auth/login',
      },
    ],
  },
  // Basic
  {
    path: '/',
    component: BasicLayout,
    routes: [],
  },
  // Playground
  {
    path: '/playground',
    component: Playground,
    routes: [],
  },
];
