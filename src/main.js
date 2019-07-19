import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import PropertyList from './assets/components/PropertyList.vue'
import PropertyList3Cols from './assets/components/PropertyList3Cols.vue'

const Welcome = { template: '<div><h1>Welcome to VueJs Realestate SPA</h1></div>' }
const AboutUs = { template: '<div>Hakkımızda</div>' }
const routes=[
  //{path:'/aboutus',component:AboutUs},
  //{path:'/index',component:SearchBox}
  {name:'Property List',path:'/property-list',component:PropertyList},
  {name:'About us',path:'/aboutus',component:AboutUs},
  {name:'index',path:'/index',component:PropertyList3Cols},
  {name:'index',path:'/',component:PropertyList3Cols}
]
Vue.config.productionTip=false
Vue.use(VueRouter)
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count:0,
    sliderActive: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  store.state.sliderActive=false;
  if(to.name=="index"){
    store.state.sliderActive=true;
  }
  document.title = to.name + " | " + to.path;// `My website - ${to.meta.title}`
  next()
})


window.vvv=new Vue({
  //el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
