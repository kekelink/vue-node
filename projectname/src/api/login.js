import axios from '@/utils/request'

const login = {
  // 登录
  getUesr (params) {
    return axios.post('/app/user', params)
  }
}

export default login
