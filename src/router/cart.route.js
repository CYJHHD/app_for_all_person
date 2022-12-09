const Router = require('koa-router')


const { auth } = require('../middleware/auth.middleware')

const { validator } = require('../middleware/cart.middleware')

const {
  add,
} = require('../controller/cart.controller')


const router = new Router({ prefix: '/carts' })


router.post('/', auth, validator, add)


module.exports = router
