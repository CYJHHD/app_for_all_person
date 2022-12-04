const Router = require('koa-router')

const {verifyUser, userValidator} = require('../middleware/user.middleware')
const {register, login} = require('../controller/user.controller')

const router = new Router({prefix:'/users'})

router.post('/register', userValidator, verifyUser, register)

router.post('/login', login)

module.exports = router