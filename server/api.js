const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true// 多语句查询
})
module.exports = {
  login (req, res, next) {
    const userName = req.query.userName
    const password = req.query.password
    pool.getConnection((_err, connection) => {
      var sql = sqlMap.selectUser
      connection.query(sql, [userName, password], (_err, result) => {
        // res.json(result);    // 向前端返回json格式的数据
        connection.release()
        const state = {}
        if (result.length > 0) {
          state.state = 1
          res.json(state)
        } else {
          state.state = 0
          res.json(state)
        }
      })
    })
  }
}
