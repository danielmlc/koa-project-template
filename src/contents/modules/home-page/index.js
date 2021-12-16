/* eslint-disable no-new */
import app from './app.vue'

new Vue({
  el: '#app',
  components: {
    app
  },
  render: h => h(app)
})
