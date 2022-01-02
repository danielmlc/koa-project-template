<template>
  <div id="app">
    <div class="login-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-button type="primary" @click="onSubmit">
          登录
        </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/babel">
  import $http from '../../common/fetch.js'
  export default {
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if (this.form.name && this.form.password) {
          $http({
            url: '/login',
            method: 'post',
            data: this.form
          }).then(
            data => {
              if (data) {
                location.href = '/'
              } else {
                this.$message('用户名或密码有误！')
              }
            }
          )
        } else {
          this.$message('用户名或密码有误！')
        }
      }
    }
  }
</script>
<style scoped>
.login-form {
  width: 500px;
}
</style>
