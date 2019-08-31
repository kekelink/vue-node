const express = require('express')
const app = express()
const bodyParser = require('body-parser') // 引入解析表单数据
const passport = require('passport') //解密
const path = require('path')
const user = require('./app/user.js')
const email = require('./app/email.js')
const jwt = require('jsonwebtoken')
const key = require('./config/key')
// const jwt = require('jsonwebtoken')
var cors = require('cors')
// 接收表单初始化
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// passport 初始化
app.use(passport.initialize())
require('./config/passport')(passport) //验证
app.use(express.static('dist'))
app.get('*',(req,res)=>{
  res.sendFile(path.relative(__dirname,'dist','index.html'))
})

// 跨域初始化
app.use(function(req, res, next) {
  // 我这里知识把登陆和注册请求去掉了，其他的多有请求都需要进行token校验
  if (req.url != '/app/user' && req.url != '/app/register') {
    let token = req.headers.authorization
    jwt.verify(token, key.keyName, (error, decoded) => {
      if (error) {
        // 验证失败原因
        console.log(error.message)
        res.json({ code: 101, msg: 'token已过期' })

        return
      } else {
        //验证成功放行
        console.log(decoded)
        next()
        
      }
    })
  } else {
    next()
  }
})
app.use(cors())
app.use('/app', user)
app.use('/app', email)

app.all('*', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://192.168.0.135:8081')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  // res.header("Access-Control-Allow-Credentials", false);
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  // if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  // else

  next()
})


app.listen('8081',() => {
  console.log('http://192.168.0.135:8081')
})
