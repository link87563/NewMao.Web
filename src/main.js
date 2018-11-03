// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex, { mapMutations, mapState } from 'vuex'

import store from './store'
import { Select, Option } from 'iview'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import VueCkeditor from 'vue-ckeditor5'

// bootstrap
import 'bootstrap'

// app style
import './assets/css/app.scss'

//fontawesome
import '@fortawesome/fontawesome-free/js/all'

Vue.config.productionTip = false

Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const options = {
  editors: {
    classic: ClassicEditor
  },
  name: 'ckeditor'
}
Vue.use(VueCkeditor.plugin, options)