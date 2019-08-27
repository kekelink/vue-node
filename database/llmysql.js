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
// conn.end(function (err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });
module.exports =conn