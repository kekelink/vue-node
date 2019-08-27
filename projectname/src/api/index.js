/*
 *api接口统一管理
 *
 */
// 引入登录接口
import login from '@/api/login.js'
import email from '@/api/email.js'

// 导出接口
export default {
  login,
  email
}
