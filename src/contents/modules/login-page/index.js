/* eslint-disable no-new */
import app from './app.vue'
// const { ipcRenderer } = require('electron')

// ipcRenderer.on('login-reply', function (event, arg) {
//   if (arg && arg === 'success') {
//     console.log('登录成功')
//   } else {
//     console.log('登录失败')
//   }
// })

new Vue({
  el: '#app',
  components: {
    app
  },
  render: h => h(app)
})
