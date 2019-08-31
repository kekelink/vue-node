import axios from '@/utils/request'

const email = {
  // 发送邮箱
  setEmail (params) {
    return axios.post('/app/email', params)
  }
}

export default email
