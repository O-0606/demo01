
const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/Login', (req, res, next) => {
  api.Login(req, res, next)
})

module.exports = router
