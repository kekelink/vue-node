import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       component: () => import('@/views/login/index'),
//       hidden: true
//     },
//     {
//       path: '/',
//       component: Layout,
//       redirect: '/dashboard',
//       children: [
//         {
//           path: 'dashboard',
//           name: 'Dashboard',
//           component: () => import('@/views/dashboard/index'),
//           meta: { title: 'Dashboard', icon: 'dashboard' }
//         }
//       ]
//     },

//     {
//       path: '/example',
//       component: Layout,
//       redirect: '/example/table',
//       name: 'Example',
//       meta: { title: 'Example', icon: 'example' },
//       children: [
//         {
//           path: 'table',
//           name: 'Table',
//           component: () => import('@/views/table/index'),
//           meta: { title: 'Table', icon: 'table' }
//         },
//         {
//           path: 'tree',
//           name: 'Tree',
//           component: () => import('@/views/tree/index'),
//           meta: { title: 'Tree', icon: 'tree' }
//         }
//       ]
//     },

//     {
//       path: '/form',
//       component: Layout,
//       children: [
//         {
//           path: 'index',
//           name: 'Form',
//           component: () => import('@/views/form/index'),
//           meta: { title: 'Form', icon: 'form' }
//         }
//       ]
//     },

//     {
//       path: '/nested',
//       component: Layout,
//       redirect: '/nested/menu1',
//       name: 'Nested',
//       meta: {
//         title: 'Nested',
//         icon: 'nested'
//       },
//       children: [
//         {
//           path: 'menu1',
//           component: () => import('@/views/nested/menu1/index'), // Parent router-view
//           name: 'Menu1',
//           meta: { title: 'Menu1' },
//           children: [
//             {
//               path: 'menu1-1',
//               component: () => import('@/views/nested/menu1/menu1-1'),
//               name: 'Menu1-1',
//               meta: { title: 'Menu1-1' }
//             },
//             {
//               path: 'menu1-2',
//               component: () => import('@/views/nested/menu1/menu1-2'),
//               name: 'Menu1-2',
//               meta: { title: 'Menu1-2' },
//               children: [
//                 {
//                   path: 'menu1-2-1',
//                   component: () =>
//                     import('@/views/nested/menu1/menu1-2/menu1-2-1'),
//                   name: 'Menu1-2-1',
//                   meta: { title: 'Menu1-2-1' }
//                 },
//                 {
//                   path: 'menu1-2-2',
//                   component: () =>
//                     import('@/views/nested/menu1/menu1-2/menu1-2-2'),
//                   name: 'Menu1-2-2',
//                   meta: { title: 'Menu1-2-2' }
//                 }
//               ]
//             },
//             {
//               path: 'menu1-3',
//               component: () => import('@/views/nested/menu1/menu1-3'),
//               name: 'Menu1-3',
//               meta: { title: 'Menu1-3' }
//             }
//           ]
//         },
//         {
//           path: 'menu2',
//           component: () => import('@/views/nested/menu2/index'),
//           meta: { title: 'menu2' }
//         }
//       ]
//     },

//     {
//       path: 'external-link',
//       component: Layout,
//       children: [
//         {
//           path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
//           meta: { title: 'External Link', icon: 'link' }
//         }
//       ]
//     },

//     // 404 page must be placed at the end !!!
//     { path: '*', redirect: '/404', hidden: true }
//   ]
// })

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '邮箱', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
