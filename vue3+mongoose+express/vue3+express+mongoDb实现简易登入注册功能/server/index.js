const express = require('express')
const bodyParser = require('body-parser')
const port = 3002
const app = express()
const custom = require('./models/customs')
// 连接mongoDb的js文件
require('./utils/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 注册
app.post('/talk/register', (req, res) =>
{
  custom.insertCustom(req.body).then(res1 =>
  {
    if (res1) {
      res.json({
        message: '注册成功',
        code: 200
      })
    }
  }).catch(err =>
  {
    res.json({
      message: err,
      code: 500
    })
  })

})

// 登入
app.post('/talk/login', (req, res) =>
{
  console.log('req', req.body)
  custom.findAll(req.body).then((res1) =>
  {
    if (res1.length === 0) {
      res.json({
        code: 200,
        message: '用户名或密码错误'
      })
    } else {
      res.json({
        code: 200,
        message: '登入成功'
      })
    }
  }).catch(err =>
  {
    res.json({
      message: err,
      code: 500
    })
  })
})

app.listen(port, () =>
{
  console.log('server-start')
})

