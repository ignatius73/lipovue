export default {
    name:'dayBook',
    component: () => import(/* webpackChunkName: "DayBookLayout" */ '@/modules/daybook/layouts/dayBookLayout.vue'),
    children:[
        { path: '',
          name:'no-entry',
          component: () => import(/* webpackChunkName: "noEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
          path:':id',
          name:'entry-view',
          component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/daybook/views/EntryView.vue'),
          props: ( route )=>{
            return {
              id: route.params.id
            }

          }
        }
    ],
}