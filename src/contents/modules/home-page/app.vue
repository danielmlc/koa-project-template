<template>
  <div id="app">
    <el-button type="primary" @click="onSubmit">
      登出
    </el-button>
    <p> {{ userInfo }} </p>
  </div>
</template>
<script type="text/babel">
  import $http from '../../common/fetch.js'
  export default {
    data() {
      return {
        userInfo: {}
      }
    },
    mounted() {
      this._init()
    },
    methods: {
      _init() {
        $http({
          url: '/user',
          method: 'get'
        }).then(
          data => {
            if (data === -400) {
              location.href = 'login-page.html'
            }
            this.userInfo = data
          }
        )
      },
      onSubmit() {
        $http({
          url: '/loginOut',
          method: 'get'
        }).then(data => {
          location.href = 'login-page.html'
        })
      }

    }
  }
</script>
<style scoped>
</style>
