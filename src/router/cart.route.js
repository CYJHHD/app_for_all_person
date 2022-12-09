const Router = require('koa-router')


const { auth } = require('../middleware/auth.middleware')

const { validator } = require('../middleware/cart.middleware')

const {
  add,
  findAll,
} = require('../controller/cart.controller')


const router = new Router({ prefix: '/carts' })


router.post('/', auth, validator, add)

router.get('/', auth, findAll)

module.exports = router
