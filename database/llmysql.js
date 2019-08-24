const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '148.70.125.38',
  user: 'nodeliu',
  password: 'liulang',
  database: 'nodeliu'
})
conn.connect(err => {
  if (err) return console.log(err.message)
})
module.exports =conn