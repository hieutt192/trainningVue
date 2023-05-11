const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('src/pages/Dashboard/Dashboard.vue')},
      {path: '/TreeTable', component: () => import('pages/TreeTable.vue')},
      {path: '/Cards', component: () => import('pages/Cards.vue')},
      {path: '/Pagination', component: () => import('pages/Pagination.vue')},
      {path: '/Directory', component: () => import('src/pages/Derectory/Directory.vue')},
      {path: '/Footer', component: () => import('pages/Footer.vue')},
      {path: '/Product', component: () => import('src/pages/Product/ProductTable.vue')},
      {path: '/Category', component: () => import('src/pages/Category/CategoryTable.vue')},

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/Mail',
    component: () => import('layouts/Mail.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  },
  {
    path: '/Pricing',
    component: () => import('pages/Pricing.vue')
  },
  {
    path: '/Login-1',
    component: () => import('pages/Login-1.vue')
  },
  {
    path: '/Lock',
    component: () => import('pages/LockScreen.vue')
  },
  {
    path: '/Lock-2',
    component: () => import('pages/LockScreen-2.vue')
  }
]

export default routes
