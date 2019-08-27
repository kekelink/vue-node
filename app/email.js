const express = require('express')
const conn = require('../database/llmysql')
const router = express.Router() // 创建路由

// 这是一个发送邮件的模块
const nodemailer = require('nodemailer') 
let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  port: 465,
  service: '163',
  secureConnection: true, // 使用了 SSL
  auth: {
    user: 'drxkyn@163.com',
    pass: 'qq223311' // 这里的密码不是 邮箱的登录密码 而是 通过邮箱内 设置 形成的授权码 这个可以自己进行设置
  }
})
router.post('/email', (req, res, next) => {
  console.log(req.body)
  const data = req.body
  // 邮件信息
  const mailOptions = {
    from: 'drxkyn@163.com',
    to: data.name, // 这里可以发送多个用户  分别用 ， 隔开
    subject: data.title,
    html: data.content// 这里可以是 html 标签 字符串
    // attachments: [{ // 这里可以添加附件  并且可以添加多个
    //     filename: 'test.txt',
    //     content: 'hello world!'
    //   },{
    //     filename: 'test.txt',
    //     content: 'hello world!',
    //     contentType: 'text/plain'
    //   }]
    // }
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
  });
})

module.exports = router
