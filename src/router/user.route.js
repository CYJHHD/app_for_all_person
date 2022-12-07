const Router = require('koa-router')

const {verifyUser, userValidator, crpytPassword, verifyLogin} = require('../middleware/user.middleware')

const {auth} = require('../middleware/auth.middleware')

const {register, login} = require('../controller/user.controller')

const router = new Router({prefix:'/users'})

router.post('/register', userValidator, verifyUser, crpytPassword, register)

router.post('/login', verifyLogin, login)

router.patch('/', auth, (ctx, next) => {
    console.log(ctx.state.user)
    ctx.body = '修改密码成功'
  })

module.exports = router
