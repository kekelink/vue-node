<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="定时" prop="time">
          <el-time-picker
            placeholder="选择时间"
            v-model="ruleForm.time"
            style="width: 100%;"
            value-format="HH:mm"
            format="HH:mm"
          ></el-time-picker>
        </el-form-item>
        <el-form-item label="收件人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">发送</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        title: '',
        content: '',
        time: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }

        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }

        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }

        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.email.setEmail(this.ruleForm).then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
