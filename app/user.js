const express = require('express')
const conn = require('../database/llmysql')
const router = express.Router() // 创建路由
const passport = require('passport') //解密
const key = require('../config/key')
const jwt = require('jsonwebtoken')
router.post('/user', (req, res, next) => {
  if (req.body.account == '') {
    res.send('不能为空')
    return
  }
  const sql = `select account,password,id from uesr  where account=?`
  conn.query(sql, req.body.account, (err, resi) => {
    if (err) return console.log(err.message)
    if (resi.length == 0)
      return res.json({ code: 0, success: false, msg: '用户名不存在' })
    let account = resi[0].account
    let password = resi[0].password
    let id = resi[0].id
    if (req.body.account == account && req.body.pas == password) {
      // jwt.sign('规则','加密名字','过期时间','箭头函数')

      jwt.sign(
        { id, account },
        key.keyName,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            code: 1,
            success: true,
            token:  token // 这里这个Bearer  是默认好的后面需要加空格
          })
        }
      )
    } else {
      res.json({ code: 0, success: false, msg: '密码错误' })
    }
  })
})
// $route get
// @ desc return user  cnpm i  passport-jwt  passport

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log(req.user); // 这里的  req.user 是passport 给我们添加的一个属性

    const sql = `select * from uesr  where account=?`
    conn.query(sql, req.user.account, (err, uesr) => {
      if (err) console.log(err)

      res.json({
        id: uesr[0].id,
        account: uesr[0].account,
        headImg: uesr[0].headImg,
        role: uesr[0].role
      })
    })
  }
)
module.exports = router // 导出路由
