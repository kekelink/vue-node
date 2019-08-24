import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import getPageTitle from '@/utils/get-page-title'
const whiteList = ['/login']
NProgress.configure({ showSpinner: false }) // 页面顶部加载条

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // set page title
  // document.title = getPageTitle(to.meta.title)
  const Token = localStorage.eleToken

  // determine whether the user has logged in
  // const hasToken = getToken()

  if (Token) {
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else {
      // 这里还需要优化
      next()
      NProgress.done()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 从登录页面开始跳
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
