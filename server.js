const express = require('express')
const app = express()
const bodyParser = require('body-parser') // 引入解析表单数据
const passport = require('passport')
const path = require('path')
const user = require('./app/user.js')
var cors = require('cors')
// 接收表单初始化
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// passport 初始化
app.use(passport.initialize())
require('./config/passport')(passport) //验证
// 跨域初始化
app.use(cors())
app.use('/app', user)
app.get('/ccc', (req, res) => {
  res.send('ok')
})
app.post('/aaa', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.all('*', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://192.168.0.135:8081')
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  // res.header("Access-Control-Allow-Credentials", false);
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  // if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  // else
  next()
})

app.listen('8081', () => {
  console.log('http://192.168.0.135:8081')
})
