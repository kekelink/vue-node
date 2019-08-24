<template>
  <div class="login_ll">
    <div class="login_ll_log">
      <div class="div_input">
        <h2 class="titel_ll">Future</h2>
      </div>
      <el-form :model="uesr" ref="ruleForm" :rules="rules" class="demo-ruleForm">
        <!-- <div class="div_input">
        <input type="text" class="login_input" v-model="uesr.account" placeholder="账号" />
        </div>-->
        <el-form-item prop="account">
          <el-input
            ref="username"
            v-model="uesr.account"
            placeholder="账号"
            name="account"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <!-- <div class="div_input">
        <input type="text" class="login_input" v-model="uesr.pas" placeholder="密码" />
        </div>-->
        <el-form-item prop="pas">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="uesr.pas"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="getUesr('ruleForm')"
          />
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;"
          @click.native.prevent="getUesr('ruleForm')"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data () {
    return {
      uesr: {
        account: '',
        pas: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pas: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    getUesr (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$axios.login.getUesr(this.uesr).then(result => {
            this.loading = false
            if (!result.success) {
              Message({
                message: result.mag,
                type: 'error'
              })
            }

            let { token } = result
            // 吧token存起来
            localStorage.setItem('eleToken', token)
          }).catch(err => {
            console.log(err)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.titel_ll {
  align-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 26px;
}
.login_ll {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #eea2a2 0%,
    #bbc1bf 19%,
    #57c6e1 42%,
    #b49fda 79%,
    #7ac5d8 100%
  );
  position: relative;
  padding-top: 150px;
  .login_ll_log {
    position: relative;
    width: 400px;
    height: 300px;
    background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
    border-radius: 10px;
    margin: auto;
    padding: 35px 40px 50px;
    .div_input {
      margin: 20px;
    }
    .login_input {
      width: 100%;
      padding: 12px 5px 12px 15px;
      margin: auto;
      color: #000;
      background: transparent;
      -webkit-appearance: none;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #999;
      box-sizing: border-box;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
        -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }
    .login_but {
      width: 100%;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      align-content: center;
      border-radius: 4px;
      color: #dfe9f3;

      background-image: linear-gradient(
        -225deg,
        #22e1ff 0%,
        #1d8fe1 48%,
        #625eb1 100%
      );
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-image: linear-gradient(
          -225deg,
          #5d9fff 0%,
          #b8dcff 48%,
          #6bbbff 100%
        );
      }
    }
  }
}
</style>
