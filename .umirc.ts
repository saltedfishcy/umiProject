import { defineConfig } from 'umi';

export default defineConfig({
  // layout: { name: '数据管理菜单', locale: false, }, 
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', component: '../layouts/index' ,
      routes: [
        { path: '/', name: '首页', component: '@/pages/index', }
      ]
    },
    { path: '/dashboard/analysis', component: '@/pages/Dashboard/analysis' },
  ],
  // routes: [    
  //   { path: '/', component: '@/pages/index', 
  //   },  
  //   { path: '/dashboard', name: '数据统计',  icon: 'dashboard',  
  //     routes: [    
  //       { path: '/dashboard/analysis',icon:'AreaChartOutlined', name: '分析页', component: '@/pages/Dashboard/Analysis' },    
  //     ],    
  //   },
  //   { component: '@/pages/404' }  
  // ],
  fastRefresh: {},
});
