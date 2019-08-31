const express = require('express')
const conn = require('../database/llmysql')
const router = express.Router() // 创建路由
const schedule = require('node-schedule') //定时任务
// 这是一个发送邮件的模块
const nodemailer = require('nodemailer')
router.post('/email', (req, res, next) => {
  console.log(req.body)
  const data = req.body
  date(data)
  console.log(data)
  // console.log(time);
  res.json({ code: 1, msg: `${data.time}执行` })
})
let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  port: 465,
  service: 'qq',
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '1476292938@qq.com',
    pass: 'kvgxcysmqesujdch' // 这里的密码不是 邮箱的登录密码 而是 通过邮箱内 设置 形成的授权码 这个可以自己进行设置
  }
})

/* 定时任务
 * @time 时间
 *
 */
function date(data) {
  const time = data.time.split(':') //时间
  var rule = new schedule.RecurrenceRule()
  rule.hour = parseInt(time[0])
  rule.minute = parseInt(time[1])
  // rule.minute = 32  分钟
  var j = schedule.scheduleJob(rule, function() {
    // 邮件信息
    const mailOptions = {
      from: '1476292938@qq.com',
      to: data.name, // 这里可以发送多个用户  分别用 ， 隔开
      subject: data.title,
      html: data.content // 这里可以是 html 标签 字符串
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
      date()
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
    })
  })
}

module.exports = router
