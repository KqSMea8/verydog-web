import Vue from 'vue'
import Router from 'vue-router'
import assign from 'lodash/assign'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: assign({
      time: new Date().getTime()
    }, query || {})
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component(resolve){
        require(['@/views/index.vue'], resolve)
      }
    },
    {
      path: '/best',
      name: 'best',
      component(resolve){
        require(['@/views/best.vue'], resolve)
      }
    }
  ]
})
